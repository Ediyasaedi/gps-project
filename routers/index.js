const express = require('express')
const route = express.Router()

const Controller = require('../controllers/Controller')

const adminRouter = require('./admin')
const userRouter = require('./user')

route.get('/', Controller.home)
route.get('/login', Controller.loginForm)
route.post('/login', Controller.login)
route.get('/register', Controller.registerForm)
route.post('/register', Controller.register)

route.get('/loginadmin', Controller.loginAdminForm)
route.post('/loginadmin', Controller.loginAdmin)

route.get('/report/:id', Controller.showReport)

function checkLogin (req, res, next){
    if(req.session.userId){
        next()
    } else {
        res.redirect('/login')
    }
}

function checkLoginAdmin (req, res, next){
    if(req.session.userIdAdmin){
        next()
    } else {
        res.redirect('/loginadmin')
    }
}

route.get('/logout', checkLogin, Controller.logout)
route.use('/admin', checkLoginAdmin, adminRouter)
route.use('/user', checkLogin, userRouter)

module.exports = route