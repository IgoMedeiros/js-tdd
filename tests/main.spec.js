var expect = require('chai').expect;

describe('main', function() {
  var arr;
  before(function() {

  });

  after(function() {

  });

  beforeEach(function() {
    arr = [1,2,3];
  });

  afterEach(function() {

  });

  it('should be an array', function(){
    expect(arr).to.be.a('array');
  });


  it('should have a size of 4 when push another value to array', function() {
    arr.push(arr);
    expect(arr).to.have.lengthOf(4)
  });

  it('schould remove the value 3 when user pop in the array', function(){
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should return true when pop 3 from the array', function(){
    expect(arr.pop() === 3).to.be.true;
  });


  it('schould have a sizer of 2 pop a value from the array', function() {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });

})
