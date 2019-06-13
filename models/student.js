module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("Student", {
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
      defaultValue: 5
    }
  });

  Student.associate = function(models) {
    Student.hasMany(models.Task, {
      // onDelete: "cascade"
    });
  };
  return Student;
};
