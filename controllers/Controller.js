const { Admin, Donatur, Project, UserProject } = require('../models')
const bcrypt = require('bcryptjs')

class Controller {
    static home(req, res){
        res.render('home',)
    }

    static loginForm(req, res){
        res.render('loginForm')
    }

    static login(req, res){
        Donatur.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if(user){
                if(bcrypt.compareSync(req.body.password, user.password)){
                    req.session.userId = user.id
                    res.redirect('/')
                } else {
                    res.redirect('/login')
                }
            } else {
                res.send('email not found!')
            }
        })
        .catch(err => {
            res.send(err)
        })
    }

    static registerForm(req, res){
        res.render('registerForm')
    }

    static register(req, res){
        const { name, email, password } = req.body

        Donatur.create({
            name, email, password
        })
        .then(data => {
            res.redirect('/login')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static loginAdminForm(req, res){
        res.render('loginAdminForm')
    }

    static loginAdmin(req, res){
        Admin.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        }).then(admin => {
            req.session.userIdAdmin = admin.id
            res.redirect('/admin')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static showReport(req, res){
        let labels = ['25 August', '26 August', '27 August', '28 August', '29 August', '30 August']
        let data = [120000, 130000, 90000, 50000, 200000, 30000]

        // let id = req.params.id

        // UserProject.findAll({
        //     where: {
        //         userId: id
        //     },
        //     include: Project
        // }).then(data => {
        //     res.send(data)
        // }).catch(err => {
        //     res.send(err)
        // })

        res.render('report', { labels: labels, data: data })
    }

    static logout(req, res){
        req.session.destroy(() => {
            res.redirect('/login')
        })
    }
}

module.exports = Controller