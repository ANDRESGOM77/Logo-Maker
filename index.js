const inquirer = require("inquirer");
const fs = require("fs");

const {Circle, Square, Triangle} = require("./lib/shapes");
const svg = require("./lib/SVG");




const questions = [
    {
        type: "input",
        name: "logoText",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "textColor",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "setColor",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "logoShape",
        message: "Choose which Pixel Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

function writeToFile(fileName, data) {
 
    fs.writeFile(fileName, data, err => err
        ? console.log('error')
        : console.log('Document created'));
}

function init(){
    inquirer.prompt(questions)
   .then(answers => { 
    console.log(answers);
    const { logoText, textColor, setColor, logoShape} = answers;
    let inputShape;
    if (logoShape === "Circle") {
        inputShape = new Circle();
    } else if (logoShape === "Square") {
        inputShape = new Square();
    } else if (logoShape === "Triangle") {
        inputShape = new Triangle();
    }

    inputShape.setColor(setColor);

    const inputText = new svg();

    inputText.createShape(inputShape);
    inputText.createText(logoText, textColor,logoShape);

    const svgText = inputText.render();

    writeToFile("logo.svg", svgText);
})
.then(()=> console.log("It's alive!!!"))
.catch(err => console.log("error", err));
}

init();