module.exports = (sequelize, DataTypes) => {
    let alias = 'Role';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        level: {
            type: DataTypes.TINYINT,
            allowNull: false
        }
    };
    let config = {
        tableName: 'roles',
        timestamps: false
    };
    let Role = sequelize.define(alias, columns, config);

    Role.associate = function(models) {
        Role.hasMany(models.User, {
            as: 'users',
            foreignKey: 'id_rol'
        });
    };

    return Role;
};