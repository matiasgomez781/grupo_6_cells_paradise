<<<<<<< HEAD
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
=======
const path = require("path");

const usersController = {
  login: (req, res) => {
    res.render(("./users/login"));
  },

  register: (req, res) => {
    res.render(("./users/registro"));
  },
};
>>>>>>> 10bbbab13731c6299bf19fa4327f8302b6fd734d

module.exports = usersController;
