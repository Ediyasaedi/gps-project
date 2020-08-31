const express = require('express')
const route = express.Router()
const ControllerUser = require('../controllers/ControllerUser')

// const adminRouter = require('./admin')
// const userRouter = require('./user')

route.get('/donasi', ControllerUser.showAllProjects)
route.get('/donasi/:id', ControllerUser.showDonateForm)
route.post('/donasi/add/:id', ControllerUser.donasiAdd)
route.post('/add/confirm/:id', ControllerUser.donasiConfirmed)

module.exports = route