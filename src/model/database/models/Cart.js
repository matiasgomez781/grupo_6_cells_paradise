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

    Cart.associate = function(models) {
        Cart.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'id_user'
        });
        Cart.belongsToMany(models.Product, {
            as: 'products',
            through: 'product_cart',
            foreignKey: 'id_cart',
            otherKey: 'id_product'
        });
    };

    return Cart;
};
