const Forgotpassword = require("../models/forgotpassword");
const User = require('../models/user')
const uuid = require('uuid');
const Sib = require('sib-api-v3-sdk');
require('dotenv').config();
const client = Sib.ApiClient.instance;
const apiKey = client.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY
const tranEmailApi = new Sib.TransactionalEmailsApi();
const sender = {
    Email: 'nithinkumar2513@gmail.com'
}

exports.forgotpassword = async (req, res, next) => {
    try {

        const email = req.body.email;
        const id = uuid.v4();
        const user = User.findOne({ where: { email: req.body.email } })
        if (user) {
            Forgotpassword.create({
                id: id,
                isActive: true,
                userId: user.id
            })
                .catch(err => console.log(err))


            const reciever = [{
                email,
            },
            ]
            tranEmailApi.sendTransacEmail({
                sender,
                To: reciever,
                subject: 'hello',
                textContent: 'this is Nithin kumar here is the link to reset your password',
                htmlcontent: `<a href="http://localhost:4000/password/resetpassword/${id}">Reset password</a>`,
            })
        }
    } catch (err) {
        console.log(err)
    }

}
exports.resetpassword = (req, res) => {
    const id = req.params.id
    Forgotpassword.findOne({ where: { id: id } }).then(forgotpasswordrequest => {
        if (forgotpasswordrequest) {
            forgotpasswordrequest.update({ active: false });
            res.status(200).send(`<html>
                                    <script>
                                        function formsubmitted(e){
                                            e.preventDefault();
                                            console.log('called')
                                        }
                                    </script>

                                    <form action="/password/updatepassword/${id}" method="get">
                                    <label for="newpassword">Enter New password</label>
                                    <input name="newpassword" type="password" required></input>
                                    <button>reset password</button>
                                    </form>
                                </html>`
            )
            res.end()

        }
    })
}

exports.updatepassword = (req, res) => {

    try {
        const { newpassword } = req.query;
        const { resetpasswordid } = req.params.id;
        Forgotpassword.findOne({ where: { id: resetpasswordid } }).then(resetpasswordrequest => {
            User.findOne({ where: { id: resetpasswordrequest.userId } }).then(user => {
                // console.log('userDetails', user)
                if (user) {
                    //encrypt the password

                    const saltRounds = 10;
                    bcrypt.genSalt(saltRounds, function (err, salt) {
                        if (err) {
                            console.log(err);
                            throw new Error(err);
                        }
                        bcrypt.hash(newpassword, salt, function (err, hash) {
                            // Store hash in your password DB.
                            if (err) {
                                console.log(err);
                                throw new Error(err);
                            }
                            user.update({ password: hash }).then(() => {
                                res.status(201).json({ message: 'Successfuly update the new password' })
                            })
                        });
                    });
                } else {
                    return res.status(404).json({ error: 'No user Exists', success: false })
                }
            })
        })
    } catch (error) {
        return res.status(403).json({ error, success: false })
    }

}

