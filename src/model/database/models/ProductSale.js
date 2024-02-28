module.exports = (sequelize, DataTypes) => {
    let alias = 'ProductSale';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_sale: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_product: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'product_sale',
        timestamps: false
    };
    let ProductSale = sequelize.define(alias, columns, config);

    ProductSale.associate = function(models) {
        ProductSale.belongsTo(models.Sale, {
            as: 'sale',
            foreignKey: 'id_sale'
        });
        ProductSale.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'id_product'
        });
    };

    return ProductSale;
};
