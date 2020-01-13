#!/usr/bin/env node

// Import modules
const fs = require('fs');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');

// Setup our fancy terminal output
clear();

console.log(
  chalk.green(
    figlet.textSync('Readme', { horizontalLayout: 'full' })
  )
);

// Check to see if there is already a README
/*
if (files.directoryExists('readme.md', 'README.md')) {
    console.log(chalk.red('Your project already has a README!'));
    process.exit();
}
*/

const inquirer  = require('./lib/inquirer');

const run = async () => {
  const readme = await inquirer.readmePrompt();
  console.log(readme);
};

run();

// appendFile function with filename, content and callback function
/*
fs.appendFile('newfile_2.txt', 'Learn Node FS module', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
}); 
*/
