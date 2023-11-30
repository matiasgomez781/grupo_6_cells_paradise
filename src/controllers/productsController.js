const path = require("path");

const productsController = {
  index: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/productDetail.html"));
  },
};

module.exports = productsController;
