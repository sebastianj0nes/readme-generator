// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.repoName}

`
}

module.exports = generateMarkdown;

// When a user clicks on the links in the Table of Contents, they are taken to the corresponding section of the README.