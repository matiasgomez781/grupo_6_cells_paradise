const path = require ('path');

let usersController = {
    index: (req,res)=>{
        res.send('home de usuarios')
    },
    getOne: (req,res)=>{
        res.send('pagina del user' + req.params.id)
    }

}

module.exports = usersController;
