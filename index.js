const express = require("express")
const { verifySmtp } = require("./config/nodemailerconfig")
const content = require("./helpers/calendarObj")
const PORT = 5000
// const sendMail = require('./main')
const emails = require("./routes/sendMailsRoutes")

const app = express()
 // verify connection configuration
verifySmtp();

app.use('/send', emails)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})