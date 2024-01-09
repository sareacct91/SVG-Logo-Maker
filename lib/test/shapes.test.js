const { Circle, Triangle, Square } = require('../shapes');

describe('Circle', () => {
  describe('render', () => {
    test('returns SVG string for circle shape', () => {
      const circle = new Circle('blue', 'LoL', 'white');
      const resultStr =`<circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">LoL</text>`

      expect(circle.render()).toEqual(resultStr)
    });
  });
});

describe('Square', () => {
  describe('render', () => {
    test('returns SVG string for square shape', () => {
      const square = new Square('blue', 'LoL', 'white');
      const resultStr =`<rect x="150" y="100" width="50" height="50" fill="blue" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">LoL</text>`

      expect(square.render()).toEqual(resultStr)
    });
  });
});

describe('Triangle', () => {
  describe('render', () => {
    test('returns SVG string for triangle shape', () => {
      const triangle = new Triangle('blue', 'LoL', 'white');
      const resultStr =`<polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">LoL</text>`

      expect(triangle.render()).toEqual(resultStr)
    });
  });
});