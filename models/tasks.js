module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Fake Task Name"
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Fake Task Category"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 10
      },
      defaultValue: "Fake Task Description"
    }
  });

  Task.associate = function(models) {
    Task.belongsTo(models.Student, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Task;
};
