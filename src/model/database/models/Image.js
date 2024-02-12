module.exports = (sequelize, DataTypes) => {
    let alias = 'Image';
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
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    };
    let config = {
        tableName: 'images',
        timestamps: false
    };
    let Image = sequelize.define(alias, columns, config);

    Image.associate = function(models) {
        Image.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'id_product'
        });
    };

    return Image;
};