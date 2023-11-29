const path = require ('path');
const product =require('../model/product')

let usersController = {
    // index: (req,res)=>{
    //     res.send('home de usuarios')
    // },
    index: (req,res)=>{
        res.render('index',{element: user.getAllUsers()})
    },

    registro: (req,res)=>{
        res.render('registro')
    },

    getOne: (req,res)=>{
        res.send('pagina del user' + req.params.id)
    },

    

}

module.exports = usersController;
