//const generatePage = () => 'Name: Jane, Github: janehub';
//const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
const profileDataArgs = process.argv.slice(2, process.argv.length);
const name = profileDataArgs[0];
const github = profileDataArgs[1];

const generatePage = (userName, githubName) => {
    return `
      Name: ${userName}
      GitHub: ${githubName}
    `;
};
console.log(name,github);
console.log(generatePage(name, github));
//console.log(generatePage('Jane', 'janehub'));

