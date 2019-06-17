module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("Student", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // defaultValue: "John Doe"
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // defaultValue: "fakeEmail@email.com"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rating: {
      type: DataTypes.INTEGER,
      // defaultValue: 5
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      // defaultValue: "https://via.placeholder.com/150"
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: false,
      // defaultValue: "fake googleId"
    }
  });

  Student.associate = function(models) {
    Student.hasMany(models.Task, {
      onDelete: "cascade"
    });
  };
  return Student;
};
