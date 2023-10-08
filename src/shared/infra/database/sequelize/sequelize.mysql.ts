import { Sequelize, DataTypes, Model } from 'sequelize';
import { DATABASE } from '../../../../../config/consts';

const sequelize = new Sequelize(DATABASE.name, DATABASE.user, DATABASE.password, {
  host: DATABASE.hostname,
  dialect: 'mysql',
  logging: false
});

class BaseModel extends Model {}

BaseModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  }
}, {
  sequelize,
  timestamps: true
});

export {
  sequelize,
  BaseModel
};