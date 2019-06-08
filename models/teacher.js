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
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Teacher.associate = function(models) {
    Teacher.hasMany(models.Student, {
      onDelete: "cascade"
    });
  };
  return Teacher;
};
