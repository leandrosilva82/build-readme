const inquirer = require('inquirer');

module.exports = {
    askReadmeDetails: () => {
        const questions = [
        {
        name: 'name',
        type: 'input',
        message: 'Enter the name of your project:',
        validate: function(value) {
            if (value.length) {
                return true;
            } else {
                return 'Please enter the name of your project.';
            }
        }},
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
        }},
        {
        name: 'sections',
        type: 'checkbox',
        message: 'Select the README sections you would like to add:',
        choices: ['Install', 'Usage', 'Example', 'Development & Testing', 'Contributions', 'Gotchas'],
        }
    ];
    return inquirer.prompt(questions);
    },

    askReadmeOverwrite: () => {
        const questions = [
            {
            name: 'overwrite',
            type: 'confirm',
            message: 'Are you sure you want to overwrite your current README?:',
            default: 'n',
            }
        ];
        return inquirer.prompt(questions);
    },
};
