module.exports = (sequelize, DataTypes) => {
    let alias = 'Sale';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_payment: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        total_amount: {
            type: DataTypes.DECIMAL(8,2),
            allowNull: false
        }
    };
    let config = {
        tableName: 'sales',
        timestamps: false
    };
    let Sale = sequelize.define(alias, columns, config);

    return Sale;
};
