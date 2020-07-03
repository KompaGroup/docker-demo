"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _config = _interopRequireDefault(require("../config"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var logging = _config["default"].nodeEnv === 'development' ? console.log : false; // eslint-disable-line

var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

var sequelize = new _sequelize["default"]({
  dialect: 'postgres',
  username: _config["default"].pgUser,
  password: _config["default"].pgPassword,
  database: _config["default"].pgDB,
  host: _config["default"].pgHost,
  port: _config["default"].pgPort,
  logging: logging
});
sequelize.authenticate().then(function () {
  return console.log('Connected to Database');
})["catch"](function (err) {
  return console.log('Connect Failed', err);
});

var db = _fs["default"].readdirSync(__dirname).filter(function (filename) {
  return /model.js$/.test(filename);
}).reduce(function (total, filename) {
  var model = sequelize["import"](_path["default"].resolve(__dirname, filename));
  total[capitalize(model.name)] = model;
  return total;
}, {});
/**
 * Sets up the associations for each model.
 * @param  {string} modelName
 */


Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

var total = _objectSpread({
  sequelize: sequelize,
  Sequelize: _sequelize["default"]
}, db);

var _default = total;
exports["default"] = _default;