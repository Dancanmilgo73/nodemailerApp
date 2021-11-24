const express = require("express")
const content = require("./helpers/calendarObj")
const PORT = 5000
// const sendMail = require('./main')
const emails = require("./routes/sendMailsRoutes")

const app = express()



app.use('/send', emails)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})