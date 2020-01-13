const fs = require('fs');
const chalk = require('chalk');

module.exports = {
    buildReadme: async (buildReadme) => {

        const sectionsArray = Object.keys(buildReadme.sections).map(i => '## ' + buildReadme.sections[i] + '\n\n');
        
        fs.writeFileSync( 
            'README.md', '# ' 
            + buildReadme.name 
            + '\n\n' 
            + buildReadme.description 
            + '\n\n' 
            + sectionsArray.join(""));
            console.log(chalk.green('README built successfully!'));
        }
    }

