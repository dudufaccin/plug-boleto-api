'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Caixa_Consulta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Caixa_Consulta.init({
    horario: DataTypes.DATE,
    resultado: DataTypes.STRING,
    tempo_resposta: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Caixa_Consulta',
  });
  return Caixa_Consulta;
};