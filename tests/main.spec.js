import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {
  describe('Smoke tests', () => {
    it('should exists method `sum`', () => {
      expect(sum).to.be.exist;
    });

    it('should exists method `sub`', () => {
      expect(sub).to.be.exist;
    });

    it('should exists method `mult`', () => {
      expect(mult).to.be.exist;
    });

    it('should exists method `div`', () => {
      expect(div).to.be.exist;
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2,2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(6,2)`', () => {
      expect(sub(6,2)).to.be.equal(4);
    });
  });

  describe('Multi', () => {
    it('should return 4 when `mult(2,2)`', () => {
      expect(mult(2,2)).to.be.equal(4);
    });
  });

  describe('Div', () => {
    it('should return 4 when `div(8,2)`', () => {
      expect(div(8,2)).to.be.equal(4);
    });
  });
})
