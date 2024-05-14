class svg {
    constructor() {
        this.width = 200;
        this.height = 300;
        this.shape = '';
        this.text = '';
    }

    render() {
        return `<svg width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
        ${this.shape}
        ${this.text}
        </svg>`;
    }

    createShape(shape) {
        this.shape = shape.render();
    }

    createText(logoText, textColor, logoShape) {
        if (logoShape==='triangle') {
                this.text = `<text x="150" y="125" text-anchor="middle" fill="${textColor}" font-size="45">${logoText.toUpperCase()}</text>`;
        }else if(logoShape==='circle'){
            this.text = `<text x="150" y="125" text-anchor="middle" fill="${textColor}" font-size="45">${logoText.toUpperCase()}</text>`;
        }else if(logoShape==='square'){
            this.text = `<text x="150" y="120" text-anchor="middle" fill="${textColor}" font-size="45">${logoText.toUpperCase()}</text>`;
        }

        }
    }

module.exports = svg;