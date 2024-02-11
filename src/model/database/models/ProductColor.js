module.exports = (sequelize, DataTypes) => {
    let alias = 'ProductColor';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_color: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_product: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'product_color',
        timestamps: false
    };
    let ProductColor = sequelize.define(alias, columns, config);

    return ProductColor;
};
