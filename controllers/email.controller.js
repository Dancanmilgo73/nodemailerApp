const sendEmail = require("../config/nodemailerconfig")
const messageObj = require("../helpers/messageObj")



exports.EmailSender = async (req, res) => {

    try {
        await sendEmail(messageObj)
        return res.send("Email sent")
    } catch (error) {
        return res.send(err.message)
    }
}