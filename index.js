const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");

const {Circle, Square, Triangle} = require("./lib/shapes");
const svg = require("./lib/SVG");




const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Choose which Pixel Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

function writeToFile(fileName, data) {
 
    writeFile.writeFile(fileName, data, err => err
        ? console.log('error')
        : console.log('Document created'));
}

