"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var _config = _interopRequireDefault(require("./config"));

function listen() {
  _app["default"].listen(_config["default"].port, function () {
    console.log('Express server listening on %d, in %s mode', // eslint-disable-line
    _config["default"].port, _app["default"].get('env'));
  });
}

listen();