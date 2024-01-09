const inquirer = require('inquirer');
const { validateHTMLColorHex, validateHTMLColorName } = require('validate-color');
const { writeFile } = require('fs/promises');
const { Circle, Square, Triangle } = require('./shapes');

class Cli {
  getUserInput() {
    const questions = [
      {
        type: "input",
        message: "SVG logo file name: ",
        name: "fileName",
        default: 'logo',
        filter: (input) => input.replace('.svg', '')
      },
      {
        type: "input",
        message: "Enter up to 3 characters for SVG logo's text: ",
        name: "text",
        validate: (input) => input.length <= 3 ? true : '3 or less characters'
      },
      {
        type: "input",
        message: "Enter a color for the text(name or hex): ",
        name: "textClr",
        validate: (textClr) => validateHTMLColorName(textClr) || validateHTMLColorHex(textClr) ? true : 'enter a valide color name or hex number'
      },
      {
        type: "list",
        message: "Pick a shape for the SVG logo",
        name: "shape",
        choices: ['Circle', 'Square', 'Triangle'],
      },
      {
        type: "input",
        message: "Enter a color for the shape(name or hex): ",
        name: "color",
        validate: (textClr) => validateHTMLColorName(textClr) || validateHTMLColorHex(textClr) ? true : 'enter a valide color name or hex number'
      },
    ];
    return inquirer.prompt(questions);
  }

  async createSVG() {

    const { fileName, text, textClr, shape, color } = await this.getUserInput();

    switch (shape) {
      case 'Circle':
        return {
          fileName,
          svgStr: `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${new Circle(color, text, textClr).render()}</svg>`
        };

      case 'Square':
        return {
          fileName,
          svgStr: `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${new Square(color, text, textClr).render()}</svg>`
        }

      case 'Triangle':
        return {
          fileName,
          svgStr: `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${new Triangle(color, text, textClr).render()}</svg>`
        };
    }
  }

  async run() {
    const { fileName, svgStr } = await this.createSVG();
    writeFile(`./examples/${fileName}.svg`, svgStr);
    console.log('Generated logo.svg');
  }
};


module.exports = Cli;