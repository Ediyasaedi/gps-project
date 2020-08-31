const { Project } = require("../models")

class ControllerAdmin {
    static showAllProjects(req, res){
        Project.findAll()
        .then(project => {
            res.render('admin/showAll', { project })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addProjectForm(req, res){
        res.render('admin/addProject')
    }

    static addProject(req, res){
        const { name, description } = req.body

        Project.create({
            name, description
        })
        .then(data => {
            res.redirect('/admin')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static deleteProject(req, res){
        const id = req.params.id

        Project.destroy({
            where: {
                id
            }
        })
        .then(data => {
            res.redirect('/admin')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editProjectForm(req, res){
        const id = req.params.id

        Project.findByPk(id)
        .then(project => {
            res.render('admin/editProject', { project })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editProject(req, res){
        const id = req.params.id

        const { name, description, isOpen } = req.body

        Project.update({
            name, description, isOpen
        }, { where: { id }})
        .then(data => {
            res.redirect('/admin')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = ControllerAdmin