module.exports = (sequelize, DataTypes) => {
    let alias = 'ProductCart';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_cart: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_product: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'product_cart',
        timestamps: false
    };
    let ProductCart = sequelize.define(alias, columns, config);

    return ProductCart;
};
