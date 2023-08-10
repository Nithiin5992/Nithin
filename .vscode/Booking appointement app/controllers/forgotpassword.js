const Sib=require('sib-api-v3-sdk');
require('dotenv').config();
const client=Sib.ApiClient.instance;
const apiKey=client.authentications['api-key'];
apiKey.apiKey=process.env.API_KEY
const tranEmailApi=new Sib.TransactionalEmailsApi();
const sender={
    Email:'nithinkumar2513@gmail.com'
}
exports.forgotpassword=async(req,res,next)=>{
    try{
        const email=req.body.email
       const reciever=[{
        email,
    },
        ]
    tranEmailApi.sendTransacEmail({
        sender,
        To:reciever,
        subject:'hello',
        textContent:'this is nithin kumar'
    })

    }catch(err){
        console.log(err)
    }
}