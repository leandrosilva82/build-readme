const inquirer = require('inquirer');

const files = require('./files');

module.exports = {
  readmePrompt: () => {
    const questions = [
      {
        name: 'name',
        type: 'input',
        message: 'Enter the name of your project:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter the name of your project.';
          }
        }
      },
      {
        name: 'description',
        type: 'input',
        message: 'Enter a description for your project:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a description for your project.';
          }
        }
      },
      {
        name: 'sections',
        type: 'checkbox',
        message: 'Select the README sections you would like to add:',
        choices: ['Install', 'Usage', 'Development/Testing', 'Contributions', 'Gotchas'],
      }
    ];
    return inquirer.prompt(questions);
  },
};
