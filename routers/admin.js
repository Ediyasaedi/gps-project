const express = require('express')
const route = express.Router()
const ControllerAdmin = require('../controllers/ControllerAdmin')

route.get('/', ControllerAdmin.showAllProjects)
route.get('/add', ControllerAdmin.addProjectForm)
route.post('/add', ControllerAdmin.addProject)
route.get('/delete/:id', ControllerAdmin.deleteProject)
route.get('/edit/:id', ControllerAdmin.editProjectForm)
route.post('/edit/:id', ControllerAdmin.editProject)

module.exports = route