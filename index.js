const inquirer = require(`inquirer`);
const createSvgFile = require(`./lib/svg`);

async function main() {
  try {
    const answers = await inquirer.prompt([
      {
        type: `input`,
        name: `text`,
        message: `Enter text (up to 3 characters):`,
        validate: (input) =>
          input.length <= 3 ? true : `Text must be up to 3 characters long.`,
      },
      {
        type: `input`,
        name: `textColor`,
        message: `Enter text color:`,
      },
      {
        type: `list`,
        name: `shape`,
        message: `Choose a shape`,
        choices: [`circle`, `triangle`, `square`],
      },
      {
        type: `input`,
        name: `shapeColor`,
        message: `Enter shape color:`,
      },
    ]);
    const { text, textColor, shape, shapeColor } = answers;
    createSvgFile(text, textColor, shape, shapeColor);
    console.log(`Generated logo.svg`);
  } catch (error) {
    console.error(`error: ${error.message}`);
  }
}
main();
