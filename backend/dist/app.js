"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _methodOverride = _interopRequireDefault(require("method-override"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _routes = _interopRequireDefault(require("./routes"));

var app = (0, _express["default"])();
app.use('/public', _express["default"]["static"]('public'));
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use((0, _methodOverride["default"])());
app.use((0, _cookieParser["default"])());
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use('/', _routes["default"]);
var _default = app;
exports["default"] = _default;