module.exports = (sequelize, DataTypes) => {
    let alias = 'Stock';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_product: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        units: {
            type: DataTypes.INTEGER,
            allowNull: true // Si no hay stock el valor puede ser null
        }
    };
    let config = {
        tableName: 'stocks',
        timestamps: false
    };
    let Stock = sequelize.define(alias, columns, config);

    return Stock;
};