#!/usr/bin/env node

// Import modules
const files = require("./lib/files");
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const inquirer  = require("./lib/inquirer");
const build = require("./lib/build");

// Setup our fancy terminal output
clear();

console.log(
    chalk.green(
        figlet.textSync("Build Readme", { horizontalLayout: "default" })
    )
);

// Check to see if there is already a Readme
if (files.directoryExists("readme.md", "README.md", "readme")) {
    console.log(chalk.red("Your project already has a README!\nContinuing will overwrite your current README."));
}

// Prompt the user to build the Readme
const run = async () => {
    const buildReadme = await inquirer.askReadmeDetails();
    build.buildReadme(buildReadme);
};

run();
