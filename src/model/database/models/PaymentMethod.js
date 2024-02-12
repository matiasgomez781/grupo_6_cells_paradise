module.exports = (sequelize, DataTypes) => {
    let alias = 'PaymentMethod';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        tableName: 'payment_methods',
        timestamps: false
    };
    let PaymentMethod = sequelize.define(alias, columns, config);

    PaymentMethod.associate = function(models) {
        PaymentMethod.hasMany(models.Sale, {
            as: 'sales',
            foreignKey: 'id_payment'
        });
    };

    return PaymentMethod;
};
