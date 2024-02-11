module.exports = (sequelize, DataTypes) => {
    let alias = 'Cart';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'carts',
        timestamps: false
    };
    let Cart = sequelize.define(alias, columns, config);

    return Cart;
};
