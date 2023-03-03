const express = require('express')
const router = express.Router()
const { checkToken, dataCtrl, apiCtrl } = require('../controllers/user')
const ensureLogin = require('../config/ensureLogin')

router.post('/', dataCtrl.create, apiCtrl.auth)
router.post('/login', dataCtrl.login, apiCtrl.auth)

router.get('/check-token', ensureLogin, checkToken)

module.exports = router