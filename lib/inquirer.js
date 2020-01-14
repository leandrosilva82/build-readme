const inquirer = require("inquirer");

module.exports = {
    askReadmeDetails: () => {
        const questions = [
        {
        name: "name",
        type: "input",
        message: "Enter the name of your project:",
        validate: function(value) {
            if (value.length) {
                return true;
            } else {
                return "Please enter the name of your project.";
            }
        }},
        {
        name: "description",
        type: "input",
        message: "Enter a description for your project:",
        validate: function(value) {
            if (value.length) {
                return true;
            } else {
                return "Please enter a description for your project.";
            }
        }},
        {
        name: "sections",
        type: "checkbox",
        message: "Select the README sections you would like to add:",
        choices: [
            "What Can it Do?",
            "Install",
            "Usage", 
            "Example", 
            "Development & Testing", 
            "Contributions", 
            "Gotchas"
            ],
        },
        {
            name: "image",
            type: "list",
            message: "Will your README have an image under the description?",
            choices: [
                "Yes",
                "No",
                ],
        },
        {
            name: "travis",
            type: "list",
            message: "Would you like to add the Travis CI badge to your README?",
            choices: [
                "Yes",
                "No",
                ],
        },
        {
            name: "license",
            type: "list",
            message: "Which license badge should be added to your README?",
            choices: [
                "MIT",
                "GPL",
                "None",
                ],
        },
        {
            name: "alignment",
            type: "list",
            message: "What alignment do you want your title, description, and image to have?",
            choices: [
                "Left",
                "Center",
                ],
        },
        {
            name: "filename",
            type: "list",
            message: "What filename do you want to give your README?",
            choices: [
                "README.md",
                "readme.md",
                ],
        },
    ];
    return inquirer.prompt(questions);
    },

    askReadmeOverwrite: () => {
        const questions = [
            {
            name: "overwrite",
            type: "confirm",
            message: "Are you sure you want to overwrite your current README?:",
            }
        ];
        return inquirer.prompt(questions);
    },
};
