// function to generate markdown for README
function generateMarkdown(data) {
  // Create array to push correct image address
  const licenseBadge = [];
  // Conditional statements to check which license has been entered
  if (data.license === "MIT"){
    licenseBadge.push("mitlicense.png")
  } else if (data.license === "Apache"){
    licenseBadge.push("apachelicense.png")
  } else if (data.license === "GPU"){
    licenseBadge.push("mitlicense.png")
  }
  // Returning data taken from user input
  return `# ${data.repoName}
<img src="${licenseBadge[0]}" alt="Employee data" width="50" height="60" title="License badge">

## Table of contents

## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contribution}
## Tests
${data.testing}
## License
${data.license} License. Please refer to the repository for more information.
## Questions
Github profile: https://github.com/${data.github}
Email address: ${data.email}
`;
}

module.exports = generateMarkdown;

// When a user clicks on the links in the Table of Contents, they are taken to the corresponding section of the README.