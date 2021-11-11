const chalk = require('chalk');
const commandLineArgs = require('command-line-args');

const optionDefinitions = [
  {
    name: 'name',
    alias: 'n',
    type: String,
  },
];

const options = commandLineArgs(optionDefinitions);

const name = options.name || 'Gustavo';
const year = new Date().getFullYear();

console.log(`Hey ${chalk.blue(name)}, we are in ${chalk.red(year)}`);
