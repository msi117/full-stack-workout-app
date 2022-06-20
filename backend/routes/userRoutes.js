const express = require('express')
const { registerUser, loginUser } = require('../controller/userController')
const {protect} = require('../middleware/authMiddleware')
const router = express.Router()


router.post('/', protect, registerUser )

router.post('/login', loginUser)

module.exports = router