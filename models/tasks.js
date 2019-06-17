module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Fake Student Name"
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Fake Category"
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Fake Title"
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
