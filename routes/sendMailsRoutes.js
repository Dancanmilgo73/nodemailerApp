const express = require('express');
const { EmailSender } = require('../controllers/email.controller');
const router = express.Router();

router.route('/').post(EmailSender)

module.exports = router;