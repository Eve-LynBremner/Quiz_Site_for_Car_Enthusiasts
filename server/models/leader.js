const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Leader extends Model {}

Leader.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },   
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quizID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "quiz",
        key: "id",
      },
    },
    timeTakenSeconds: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dateAchieved: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "leader",
  }
);

// Export Post model
module.exports = Leader;