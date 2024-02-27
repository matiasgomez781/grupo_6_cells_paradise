module.exports = (sequelize, DataTypes) => {
    let alias = 'Brand';
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
        tableName: 'brands',
        timestamps: false
    };
    let Brand = sequelize.define(alias, columns, config);

    Brand.associate = function(models) {
        Brand.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'id_brand'
        });
    };

    return Brand;
};