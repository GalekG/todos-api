import { DataTypes } from 'sequelize';
import { BaseModel, sequelize } from '../../infra/database/sequelize/sequelize.mysql';

class Todo extends BaseModel {}

Todo.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Todo'
});

export {
  Todo
};