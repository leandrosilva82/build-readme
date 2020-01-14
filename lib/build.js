const fs = require("fs");
const chalk = require("chalk");

module.exports = {
    buildReadme: async (buildReadme) => {

        // Define some additional variables before building
        const sectionsArray = Object.keys(buildReadme.sections).map(i => "## " + buildReadme.sections[i] + "\n\n");
        var alignmentStart = "";
        var alignmentEnd = "";
        var travis = "";
        var license = "";
        var image = "";

        // Change variables based on input
        if (buildReadme.alignment == "Center") {
            alignmentStart = "<div align=\"center\">\n\n";
            alignmentEnd = "\n</div>\n";
        }
        if (buildReadme.travis == "Yes") {
            travis = "\n[![Build Status](https://travis-ci.org/USERNAME/REPO.svg?branch=master)](https://travis-ci.org/USERNAME/REPO)";
        }
        if (buildReadme.license == "MIT") {
            license = "\n[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)";
        }
        if (buildReadme.license == "GPL") {
            license = "\n[![GPL Licence](https://badges.frapsoft.com/os/gpl/gpl.svg?v=103)](https://opensource.org/licenses/GPL-3.0/)";
        }
        if (buildReadme.image == "Yes") {
            image = "\n<img src=\"\">\n";
        }
        
        // Build the Readme based on user input
        fs.writeFileSync(
            buildReadme.filename, alignmentStart
            + "# " + buildReadme.name
            + "\n\n" + buildReadme.description
            + "\n" + travis + license
            + "\n" + image
            + alignmentEnd
            + "\n" + sectionsArray.join("")
        );
        console.log(chalk.green(buildReadme.filename + " built successfully!"));
    }
}
