/* eslint-disable import/prefer-default-export */
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

export function getUser() {
    return db.get('users').value();
}

export function createUser({ name, address, age }) {
    db.get('users')
        .push({ name, address, age })
        .write();
}
