class Shape {
  constructor(color, text, textClr) {
    this.color = color;
    this.text = text;
    this.textClr = textClr;
  }
  renderText(x, y) {
    return `<text x="${x}" y="${y}" font-size="60" text-anchor="middle" fill="${this.textClr}">${this.text}</text>`
  };
}

class Circle extends Shape {
  constructor(color, text, textClr) {
    super(color, text, textClr)
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />${this.renderText('150', '120')}`
  }
}

class Square extends Shape {
  constructor(color, text, textClr) {
    super(color, text, textClr)
  }
  render() {
    return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />${this.renderText('150', '120')}`
  }
}

class Triangle extends Shape {
  constructor(color, text, textClr) {
    super(color, text, textClr)
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />${this.renderText('150', '150')}`
  }
}


module.exports = { Circle, Square, Triangle };