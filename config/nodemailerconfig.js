require('dotenv').config()
const nodemailer = require("nodemailer")
// const {smtpTransport} = require('nodemailer')
const transport = nodemailer.createTransport(
    {
        service: "gmail",
        // port: 587,
        auth: {
            user: process.env.emailUser,
            pass: process.env.pass
        }
    }
)
// nbpupmovbwbpjtvd
function verifySmtp(){
    // verify connection configuration
 transport.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready for emails');
    }
    return true;
});
}
verifySmtp(); // call function in index.js file

const sendEmail = async (message) => {
    return new Promise((resolve, reject) => {
        transport.sendMail(message, (err, info) => {
            if (err) {
                return reject(err)
            }

            console.log(info.response)
            resolve(info.response)
        })
    })
}

module.exports = sendEmail