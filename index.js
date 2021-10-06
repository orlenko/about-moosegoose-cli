#!/usr/bin/env node

const welcome = require('cli-welcome');
const packageInfo = require('./package.json');

welcome({
    title: packageInfo.name,
    tagLine: 'wat',
    description: packageInfo.description,
    version: packageInfo.version,
    bgColor: '#FFFF00',
    color: '#00000',
    clear: false,
    bold: true
});



console.log(`
Moose Goose eh!

An amazing moose who is also an awesome goose.

🪶 Twitter https://twitter.com/moosegoose21

`);
