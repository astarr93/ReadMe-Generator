const apache = { text: "Licensed under the [Apache license](https://spdx.org/licenses/Apache-2.0.html).", badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' };
const gnu = { text: "Licensed under the [GNU GPLv3 license](https://spdx.org/licenses/GPL-3.0-or-later.html).", badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)' };
const isc = { text: "Licensed under the [ISC license](https://spdx.org/licenses/ISC.html).", badge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)' };
const mit = { text: "Licensed under the [MIT license](https://spdx.org/licenses/MIT.html).", badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' };
const contributorCovenant = { text: `This project has adopted the [Contributor Covenant](https://www.contributor-covenant.org/). Please visit their [FAQs Page](https://www.contributor-covenant.org/faq/) for more information.`, badge: `[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)` };
let badges = [];

function generateMarkdown(answers) {
  let license = checkLicense(answers);
  let conductCode = checkContributors(answers);

  return `# ${answers.projectTitle}  
  ${badges.join(" ")}

## Table of Contents

  1. [Description](#description)  
  2. [Installation](#installation)  
  3. [Usage](#usage)  
  4. [Testing](#testing)    
  5. [License](#license)    
  6. [Contributions](#contributions)    
  7. [Support](#support)    

  
# Description


${answers.projectAbout}  


# Installation  


${answers.projectInstall}  


# Usage  


${answers.projectUsage}  


# Testing  


${answers.projectTest}  


# License  


${license}


# Contributions  


${conductCode}  


# Support  


Don't hestiate to reach out to https://www.github.com/${answers.support} for any questions or concerns regarding the project.

`;
}


function checkLicense(answers) {
  switch (answers.projectLicense) {
    case "Apache License 2.0":
      badges.push(apache.badge);
      return apache.text;
      break
    case "GNU GPLv3":
      badges.push(gnu.badge);
      return gnu.text;
      break;
    case "ISC":
      badges.push(isc.badge);
      return isc.text;
      break;
    case "MIT":
      badges.push(mit.badge);
      return mit.text;
      break;
    default:
      return "This project is currently unlicensed.";
      break;
  };
};

function checkContributors(answers) {
  if (!answers.haveContributors) {
    return "We're not accepting contributions at this time."
  }
  else {
    badges.push(contributorCovenant.badge);
    return contributorCovenant.text;
  }
}

module.exports = generateMarkdown;