class svg {
    constructor() {
        this.shape = '';
        this.text = '';
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shape}
        ${this.text}
        </svg>`;
    }

    createText(logoText, textColor) {
        // if (logoShape === 'triangle') {
        this.text = `<text x="150" y="125" text-anchor="middle" fill="${textColor}" font-size="45">${logoText.toUpperCase()}</text>`;
        // } else if (logoShape === 'circle') {
        //     this.text = `<text x="150" y="125" text-anchor="middle" fill="${textColor}" font-size="45">${logoText.toUpperCase()}</text>`;
        // } else if (logoShape === 'square') {
        //     this.text = `<text x="150" y="120" text-anchor="middle" fill="${textColor}" font-size="45">${logoText.toUpperCase()}</text>`;
        // }

    }

    createShape(shape) {
        this.shape = shape.render();
    }
}

module.exports = svg;