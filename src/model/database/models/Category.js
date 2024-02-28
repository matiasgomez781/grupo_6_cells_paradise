module.exports = (sequelize, DataTypes) => {
    let alias = 'Category';
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
        tableName: 'categories',
        timestamps: false
    };
    let Category = sequelize.define(alias, columns, config);

    Category.associate = function(models) {
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'id_category'
        });
    };

    return Category;
};