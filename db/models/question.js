'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Categories }) {
      this.belongsTo(Categories, {
        foreignKey: 'category_id',
      });
    }
  }
  Question.init({
    description: {
      type: DataTypes.TEXT
    },
    img: {
      type: DataTypes.TEXT
    },
    answer: {
      type: DataTypes.TEXT
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Categories",
        key: "id"
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};