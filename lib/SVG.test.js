const { default: inquirer } = require("inquirer");
const {Circle, Square, Triangle} = require("./shapes")
const SVG = inquirer('./SVG')

describe("SVG", () => {
    describe("render circle", () => {
      it("it has to be a circle", () => {
        const svg = new SVG();
        const triangle = new Circle();
        svg.createShape(triangle);
        expect(svg.render()).toContain("circle");
      });
    });
    describe("render triangle", () => {
      it("it has to be a triangle", () => {
        const svg = new SVG();
        const square = new Triangle();
        svg.createShape(square);
        expect(svg.render()).toContain("polygon");
      });
    });
      describe("render squere", () => {
          it("it has to be a square", () => {
          const svg = new SVG();
          const circle = new Square();
          svg.createShape(circle);
          expect(svg.render()).toContain("square");
          });
      });
  });