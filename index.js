#! /usr/bin/env node

var argv = require('yargs')
  .alias('n', 'name')
  .argv;

console.log('hello ', argv.n);
console.log(argv._);