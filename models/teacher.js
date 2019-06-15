module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define("Teacher", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 5
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Teacher.associate = function(models) {
  //   Teacher.hasMany(models.Student, {
  //     onDelete: "cascade"
  //   });
  // };
  return Teacher;
};
