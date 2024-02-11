module.exports = (sequelize, DataTypes) => {
    let alias = 'Address';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_postal_code: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        direction: {
            type: DataTypes.STRING,
            allowNull: true
        }
    };
    let config = {
        tableName: 'addresses',
        timestamps: false
    };
    let Address = sequelize.define(alias, columns, config);

    return Address;
};