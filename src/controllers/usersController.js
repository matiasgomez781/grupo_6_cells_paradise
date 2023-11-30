const path = require ('path');
const product =require('../model/product')

let usersController = {
    
    // index: (req,res)=>{
    //     res.render('index',{element: user.getAllUsers()})
    // },

    login: (req,res)=>{
        res.render('login')
    },

    registro: (req,res)=>{
        res.render('registro')
    },

    getOne: (req,res)=>{
        res.send('pagina del user' + req.params.id)
    },

    

}

module.exports = usersController;
