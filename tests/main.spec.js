var expect = require('chai').expect;
var calc = require('../src/main.js');

describe('Calc', function() {
  describe('Smoke tests', () => {
    it('should exists the calc lib', function(){
      expect(calc).to.be.exist;
    });

    it('should exists method `sum`', function(){
      expect(calc.sum).to.be.exist;
    });

    it('should exists method `sub`', function(){
      expect(calc.sub).to.be.exist;
    });

    it('should exists method `mult`', function(){
      expect(calc.mult).to.be.exist;
    });

    it('should exists method `div`', function(){
      expect(calc.div).to.be.exist;
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', function(){
      expect(calc.sum(2,2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(6,2)`', function(){
      expect(calc.sub(6,2)).to.be.equal(4);
    });
  });

  describe('Multi', () => {
    it('should return 4 when `mult(2,2)`', function(){
      expect(calc.mult(2,2)).to.be.equal(4);
    });
  });

  describe('Div', () => {
    it('should return 4 when `div(8,2)`', function(){
      expect(calc.div(8,2)).to.be.equal(4);
    });
  });
})
