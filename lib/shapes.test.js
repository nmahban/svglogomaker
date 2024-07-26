const inquirer = require(`inquirer`);

async function testInquirer() {
  try {
    const answers = await inquirer.prompt([
      {
        type: `input`,
        name: `testInput`,
        message: `Test input`,
      },
    ]);
    console.log(`Test input:`, answers.testInput);
  } catch (error) {
    console.error(`Error`, error.message);
  }
}

testInquirer();
