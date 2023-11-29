const path = require("path");

const usersController = {
    login: (req, res) => {
        res.sendFile(path.resolve("./src/views/login.html"))

    },
}

module.exports = usersController;