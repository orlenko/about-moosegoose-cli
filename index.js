#!/usr/bin/env node

const welcome = require('cli-welcome');
const packageInfo = require('./package.json');
const chalk = require('chalk');

const log = console.log;

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



log(`
${chalk.bgBlue(' Moose Goose ')}

${chalk.dim('An amazing moose who is also an awesome goose.')}

${chalk.hex('#1da1f2').inverse.bold(' 🪶 Twitter: ')} ${chalk.dim('https://twitter.com/moosegoose21')}

`);
