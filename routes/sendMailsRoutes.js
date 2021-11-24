const express = require('express');
const { EmailSender } = require('../conrollers/email.controller');
const router = express.Router();

router.route('/').post(EmailSender)

module.exports = router;