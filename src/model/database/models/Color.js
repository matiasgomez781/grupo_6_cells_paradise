module.exports = (sequelize, DataTypes) => {
    let alias = 'Color';
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
        tableName: 'colors',
        timestamps: false
    };
    let Color = sequelize.define(alias, columns, config);

    Color.associate = function(models) {
        Color.belongsToMany(models.Product, {
            as: 'products',
            through: 'product_color',
            foreignKey: 'id_color',
            otherKey: 'id_product'
        });
    };

    return Color;
};