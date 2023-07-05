# Node.js README.md Generator

## Description

This project called for the creation of a professional README.md generating command-line application. The assignment's criteria were as follows: 

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Installation

Installation for this command line application is done by downloading this repository's code and running the code in your source code editor. </br> 
VSCode uses an integrated terminal through which this application is meant to be used. NPM libraries and dependencies must also be downloaded such as Inquirer. </br>
The commands "npm init -y" and "npm i inquirer@8.2.4" must be ran in order to initialize the needed libraries. </br>

Source code for the portfolio page can be found here: [JavaScript](https://github.com/IVignollesJeong/Node-Readme-Generator/blob/master/index.js).

## Usage


https://github.com/IVignollesJeong/Node-Readme-Generator/assets/131202032/b55cb8be-f23d-4d3b-9d25-77c9c0e5a36c


The command-line application functions as follows:

- Upon downloading the code and running in VSCode, the user will initialize the application by using the command "node index.js" in the integrated terminal.
- By running the command above, a series of prompts will be presented to the user within the terminal.
- After answering all prompts, the console will log "Success!".
- At this point, a new README.md file will have been created and populated with the user's inputs for the prompts.

## Credits

[Inquirer NPM page](https://www.npmjs.com/package/inquirer/v/8.2.4) </br>
[GitHub License Badges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba) </br>
[Licensing Copy Paste](https://choosealicense.com/licenses/) </br>
Code Framework from week 9 mini-project - OSU Bootcamp

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) </br>

MIT License

Copyright (c) [2023] [Ian Vignolles-Jeong]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
