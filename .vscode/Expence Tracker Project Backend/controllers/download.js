const Expence = require('../models/expence');
const aws = require('aws-sdk');
require('dotenv').config();
const downloadedurl = require("../models/downloadedurl");

function uploadtoS3(data, filename) {
    const accessKeyId= process.env.AWS_ACCESS_KEY_ID;
    const secretkey =  process.env.AWS_SECRET_ACCESS_KEY
   
    const bucket_name = 'nithin5992';
    const s3bucket = new aws.S3({
        accessKeyId: accessKeyId,
        secretAccessKey: secretkey
    })
    var params = {
        Bucket: bucket_name,
        Key: filename,
        Body: data,
        ACL: 'public-read'
    }
    return new Promise((resolve, reject) => {
        s3bucket.upload(params, (err, s3responce) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                console.log(s3responce)
                resolve(s3responce.Location);
            }
        })
    })

}
exports.downloadexpence = async (req, res) => {
    try {
        const userId = req.userid
        const expence = await Expence.findAll({ where: { id: userId } })
        const stringifiedexpence = JSON.stringify(expence);
        const filename = "expence.txt";
        const fileurl = await uploadtoS3(stringifiedexpence, filename)
        res.status(200).json({ fileurl, success: true })
        await downloadedurl.create({ userId: userId, url: fileurl })
    } catch (err) {
        console.log(err)
    }
}

