"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = getUser;
exports.createUser = createUser;

/* eslint-disable import/prefer-default-export */
var low = require('lowdb');

var FileSync = require('lowdb/adapters/FileSync');

var adapter = new FileSync('db.json');
var db = low(adapter);

function getUser() {
  return db.get('users').value();
}

function createUser(_ref) {
  var name = _ref.name,
      address = _ref.address,
      age = _ref.age;
  db.get('users').push({
    name: name,
    address: address,
    age: age
  }).write();
}