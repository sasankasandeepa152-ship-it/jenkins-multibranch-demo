const assert = require('node:assert/strict');
const greet = require('./index');

assert.equal(
    greet(),
    'Hello from Multibranch Pipeline'
);

console.log('Test passed');