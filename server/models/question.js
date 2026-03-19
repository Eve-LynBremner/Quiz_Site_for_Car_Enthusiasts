const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Question extends Model {}


Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quizID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "quiz",
        key: "id",
      },
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    options: {
      type: DataTypes.JSON, //ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "question",
  }
);

// Export Course model
module.exports = Question;
