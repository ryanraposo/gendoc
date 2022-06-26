import inquirer from 'inquirer';


import { generateReadme } from './src/readme-template.js';


const prompt = () => {
    return inquirer
        .prompt([
            {
                // title
                type: 'input',
                name: 'title',
                message: 'What is the project called? (Required)',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('Please enter the name of the project!');
                        return false;
                    }
                }
            },
            {
                // description
                type: 'input',
                name: 'description',
                message: 'Enter a description for your project: (Required)',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter a description for the project!');
                        return false;
                    }
                }
            },
            {
                // installation
                type: 'input',
                name: 'installation',
                message: 'How is the project installed? (Required)',
                validate: installationInput => {
                    if (installationInput) {
                        return true;
                    } else {
                        console.log('Please enter installation instructions for the project!');
                        return false;
                    }
                }
            },
            {
                // usage
                type: 'input',
                name: 'usage',
                message: 'How is the project used?',
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    } else {
                        console.log('Please enter usage instructions for the project!');
                        return false;
                    }
                }
            },
            {
                // contributing
                type: 'input',
                name: 'contributing',
                message: 'How can someone contribute to the project?',
                validate: contributingInput => {
                    if (contributingInput) {
                        return true;
                    } else {
                        console.log('Please enter contributing instructions for the project!');
                        return false;
                    }
                }
            },
            {
                // tests
                type: 'input',
                name: 'tests',
                message: 'How can someone test the project?',
                validate: testsInput => {
                    if (testsInput) {
                        return true;
                    } else {
                        console.log('Please enter test instructions for the project!');
                        return false;
                    }
                }
            },
            {
                // license
                type: 'checkbox',
                name: 'license',
                message: 'Select a license:',
                choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License']
            },
            {
                // username
                type: 'input',
                name: 'username',
                message: 'What is your GitHub username?',
                validate: usernameInput => {
                    if (usernameInput) {
                        return true;
                    } else {
                        console.log('Please enter your GitHub username!');
                        return false;
                    }
                }
            },
            {
                // email
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter your email address!');
                        return false;
                    }
                }
            },
        ]);
};

prompt()
    .then(readmeData => {
        return generateReadme(readmeData);
    });