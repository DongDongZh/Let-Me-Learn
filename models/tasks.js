module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 10
      }
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
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
