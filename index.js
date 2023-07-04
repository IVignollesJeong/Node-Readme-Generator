const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where are you located?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Can you describe yourself in one sentence?',
      name: 'bio',
    },
    {
        type: 'input',
        message: 'What is your LinkdIn URL?',
        name: 'linkedinurl',
      },
      {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'githuburl',
      },
  ])
  .then((answers) => {

   const htmlGen = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body>
        <header>
            <h1>Hello! My name is ${answers.name}</h1>
    
        </header>
    
        <section>
    
            <h2>I am based in ${answers.location}</h2>
            <h3>A quick bio of myself: ${answers.bio}</h3>
            <p>My LinkdIn URL is: ${answers.linkdinurl}</p>
            <p>My GitHub URL is: ${answers.githuburl}</p>
    
            <!-- Unordered list -->
            <ul>
                <li>This is list item one</li>
                <li>This is list item two</li>
                <li>This is list item three</li>
            </ul>
        </section>
    </body>
    
    </html>`;

    fs.writeFile('page.html', htmlGen, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
  });