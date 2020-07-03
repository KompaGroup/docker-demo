"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(sequelize, DataTypes) {
  var Users = sequelize.define('users', {
    id: {
      type: DataTypes.STRING,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING
    },
    nationalId: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  });
  return Users;
}