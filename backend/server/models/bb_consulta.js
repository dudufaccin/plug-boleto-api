'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BB_Consulta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BB_Consulta.init({
    horario: DataTypes.DATE,
    resultado: DataTypes.STRING,
    tempo_resposta: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'BB_Consulta',
  });
  return BB_Consulta;
};