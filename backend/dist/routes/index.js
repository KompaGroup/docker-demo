"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _express = _interopRequireDefault(require("express"));

var _lodash = _interopRequireDefault(require("lodash"));

var _db = require("../db");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var router = _express["default"].Router();

router.get('/user', function (req, res) {
  console.log('getUser-------', (0, _db.getUser)());
  res.json({
    user: (0, _db.getUser)()
  });
});
router.post('/user', function (req, res) {
  var data = req.body;
  console.log('data---------', data);

  if (!_lodash["default"].isEmpty(data)) {
    (0, _db.createUser)(_objectSpread({}, data));
    res.json({
      msg: 'success'
    });
  }
});
router.put('/user/:id', function (req, res) {
  res.json({
    user: 'put User'
  });
});
router["delete"]('/user/:id', function (req, res) {
  res.json({
    user: 'delete User'
  });
});
var _default = router;
exports["default"] = _default;