const sendEmail = require("../config/nodemailerconfig")
const messageObj = require("../helpers/messageObj")



exports.EmailSender = async (req, res) => {

    try {
        await sendEmail(messageObj)
        res.send("Email sent")
    } catch (error) {
        res.send(err.message)
    }
}