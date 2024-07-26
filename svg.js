const fs = require(`fs`);
const { Circle, Square, Triangle } = require(`./examples`);

function createSvgFile(text, textColor, shapeType, shapeColor) {
  let shape;
  switch (shapeType) {
    case `circle`:
      shape = new Circle();
      break;
    case `square`:
      shape = new Square();
      break;
    case `triangle`:
      shape = new Triangle();
      break;
    default:
      throw new Error(`Invalid shape type`);
  }
  shape.setColor(shapeColor);

  const svgContent = `<svg width"300" height="200" xmlns="http://www.w3.org/2000/svg">${shape.render()}<text x="150" y="130" font-size="24" text-anchor-"middle" fill="${textColor}">${text}</text></svg>
  `;
  fs.writeFileSync(`logo.svg`, svgContent);
}

module.exports = createSvgFile;
