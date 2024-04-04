module.exports = (sequelize, DataTypes) => {
 
  let alias = "User";
  let columns = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  };
  let config = {
    tableName: "users",
    timestamps: false,
  };
  let User = sequelize.define(alias, columns, config);

    


  User.associate = function (models) {
    User.belongsTo(models.Role, {
      as: "role",
      foreignKey: "id_rol",
    });
    User.hasMany(models.Address, {
      as: "addresses",
      foreignKey: "id_user",
    });
    User.hasMany(models.Cart, {
      as: "carts",
      foreignKey: "id_user",
    });
    User.hasMany(models.Purchase, {
      as: "purchases",
      foreignKey: "id_user",
    });
  };

  return User;
};
