module.exports = (sequelize, DataTypes) => {
    let alias = 'PostalCode';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        tableName: 'postal_codes',
        timestamps: false
    };
    let PostalCode = sequelize.define(alias, columns, config);

    PostalCode.associate = function(models) {
        PostalCode.hasMany(models.Address, {
            as: 'addresses',
            foreignKey: 'id_postal_code'
        });
    };

    return PostalCode;
};
