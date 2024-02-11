module.exports = (sequelize, DataTypes) => {
    let alias = 'UserAddress';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_address: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'user_address',
        timestamps: false
    };
    let UserAddress = sequelize.define(alias, columns, config);

    return UserAddress;
};
