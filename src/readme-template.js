const generateLicenseBadge = license => {
    switch(license){
        case "Apache License 2.0":
            return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        case "GNU General Public License v3.0":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        case "MIT License":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
};

const generateReadme = readmeData => {
    const { title, description, installation, usage, contributing, tests, license, username, email } = templateData;

    return `
# ${title}

${generateLicenseBadge(license)}

- [${title}](#${title})
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

${description}

## Installation

${installation}

## Usage 

${usage}

## Contributing 

${contributing}

## Tests

${tests}

## Questions

GitHub: ${username}

Comments, critiques, questions? Contact me at: ${email}
    `;
};


export { generateReadme };