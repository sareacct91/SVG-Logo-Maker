class Shape {
  constructor(color, text, textClr) {
    this.color = color;
    this.text = text;
    this.textClr = textClr;
  }
  renderText() {
    return `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textClr}">${this.text}</text>`
  };
}

class Circle extends Shape {
  constructor(color, text, textClr) {
    super(color, text, textClr)
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />${this.renderText()}`
  }
}

class Square extends Shape {
  constructor(color, text, textClr) {
    super(color, text, textClr)
  }
  render() {
    return `<rect x="150" y="100" width="50" height="50" fill="${this.color}" />${this.renderText()}`
  }
}

class Triangle extends Shape {
  constructor(color, text, textClr) {
    super(color, text, textClr)
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />${this.renderText()}`
  }
}


module.exports = { Circle, Square, Triangle };