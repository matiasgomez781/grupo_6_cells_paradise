module.exports = (sequelize, DataTypes) => {
    let alias = 'Purchase';
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
        final_price: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    };
    let config = {
        tableName: 'purchases',
        timestamps: false
    };
    let Purchase = sequelize.define(alias, columns, config);

    Purchase.associate = function(models) {
        Purchase.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'id_user'
        });
        Purchase.belongsToMany(models.Product, {
            as: 'products',
            through: 'product_purchase',
            foreignKey: 'id_purchase',
            otherKey: 'id_product'
        });
    };

    return Purchase;
};
