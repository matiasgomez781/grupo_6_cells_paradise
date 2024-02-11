module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_category: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_brand: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(7,2),
            allowNull: false
        },
        discount: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };
    let Product = sequelize.define(alias, columns, config);

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'id_category'
        });
        Product.belongsTo(models.Brand, {
            as: 'brand',
            foreignKey: 'id_brand'
        });
        Product.hasMany(models.Image, {
            as: 'images',
            foreignKey: 'id_product'
        });
        Product.belongsToMany(models.Color, {
            as: 'colors',
            through: 'product_color',
            foreignKey: 'id_product',
            otherKey: 'id_color'
        });
        Product.belongsToMany(models.Cart, {
            as: 'carts',
            through: 'product_cart',
            foreignKey: 'id_product',
            otherKey: 'id_cart'
        });
        Product.belongsToMany(models.Sale, {
            as: 'sales',
            through: 'product_sale',
            foreignKey: 'id_product',
            otherKey: 'id_sale'
        });
        Product.belongsToMany(models.Purchase, {
            as: 'purchases',
            through: 'product_purchase',
            foreignKey: 'id_product',
            otherKey: 'id_purchase'
        });
        Product.hasOne(models.Stock, {
            as: 'stock',
            foreignKey: 'id_product'
        });
    };

    return Product;
};
