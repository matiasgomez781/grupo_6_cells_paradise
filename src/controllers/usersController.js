const path = require("path");

const usersController = {
    login: (req, res) => {
        res.sendFile(path.resolve("./src/views/loggin.html"))

    },
}

module.exports = usersController;