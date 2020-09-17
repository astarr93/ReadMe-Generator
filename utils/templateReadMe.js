const apache = { text: "Licensed under the [Apache License](https://spdx.org/licenses/Apache-2.0.html).", badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' };
const gnu = { text: "Licensed under the [GNU GPLv3 License](https://spdx.org/licenses/GPL-3.0-or-later.html).", badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)' };
const isc = { text: "Licensed under the [ISC License](https://spdx.org/licenses/ISC.html).", badge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)' };
const mit = { text: "Licensed under the [MIT License](https://spdx.org/licenses/MIT.html).", badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' };

function generateMarkdown(answers) {

  return `# ${answers.projectTitle}  


## Table of Contents

  1. [Description](#description)  
  2. [Installation](#installation)  
  3. [Usage](#usage)  
  4. [Testing](#testing)    
  5. [License](#license)    
  6. [Contributions](#contributions)    
  7. [Support](#support)    

***
  
# 1. Description

${answers.projectAbout}  

***

# 2. Installation  

${answers.projectInstall}  

***

# 3. Usage  

${answers.projectUsage}  

***

# 4. Testing  

${answers.projectTest}  

***

# 5. License  

${checkLicense(answers)}

***

# 6. Contributions  

${checkContributers(answers)}  

***

# 7. Support  

${answers.support}  

***
`;
}

function checkLicense(answers) {
  if (answers.haveProjectLicense === false) {
    let license = "This project is not licensed.";
    return license;
  } else if (answers.projectLicense === "Apache License 2.0") {
    let license = apache
    return `${license.text} ${license.badge}`;
  } else if (answers.projectLicense === "GNU GPLv3") {
    let license = gnu;
    return `${license.text} ${license.badge}`;
  } else if (answers.projectLicense === "ISC") {
    let license = isc;
    return `${license.text} ${license.badge}`;
  } else if (answers.projectLicense === "MIT") {
    let license = mit;
    return `${license.text} ${license.badge}`;
  }
};

function checkContributers(answers) {
  return answers.haveContributers ? `We're accepting contributions from developers following the [Contributor Covenant](https://www.contributor-covenant.org/).` : "We're not accepting contributions at this time."
}

module.exports = generateMarkdown;

