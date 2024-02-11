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

    return Product;
};
