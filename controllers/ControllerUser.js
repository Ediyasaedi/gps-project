const { Project, UserProject } = require("../models");
const rupiahFormatter = require("../helper/rupiahFormatter")

class ControllerUser {
    static showAllProjects(req, res){
        Project.findAll()
        .then(project => {
            for(let i = 0; i < project.length; i++){
                project[i].value = rupiahFormatter(project[i].value)
            }
            res.render('donatur/showProjects', { project })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static showDonateForm(req, res){
        const id = Number(req.params.id)

        Project.findAll({
            where: {
                id: id
            }
        })
        .then(item => {
            res.render('donatur/donateForm', { item })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static donasiAdd(req, res){
        const { jumlah_donasi } = req.body
        const id = req.params.id
        
        let tempValue = Math.floor(Math.random() * 999) + 100;
        let finalValue = tempValue + Number(jumlah_donasi)

        Project.findByPk(id)
        .then(data => {
            res.render('donatur/confirmation', { data, finalValue })
            return UserProject.create({
                userId: req.session.userId,
                projectId: id,
                Nominal: finalValue
            })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static donasiConfirmed(req, res){
        const id = req.params.id
        const { value_final } = req.body

        let temp = 0

        Project.findByPk(id)
        .then(data => {
            temp = data.value + Number(value_final)
            return Project.update({ value: temp }, { where: { id }})
        })
        .then(item => {
            res.redirect('/')
        })
        .catch(err => {
            res.send(err)
        })
    }

}

module.exports = ControllerUser