const sudokify =  require('./../src/sudoku.js').sudokifyModule;

describe('sudokify', function() {
  it('should be an ordered 1 through 9 numeric Array', function() {
    const checkArray = sudokify([8,3,7,2,5,4,9,1,6]);
    expect(checkArray).toEqual([1,2,3,4,5,6,7,8,9]);
  });

  // it('should count the times true is returned', function() {
  //   let trueOnes = [];
  //   let allArrays = [];
  //   allArrays[0] = [8,3,7,2,5,4,9,1,6];
  //   allArrays[1] = [9,2,1,8,7,6,5,3,4];
  //   forEach (var array in allArrays) {
  //     var boo = sudokify(array);
  //     if (boo === true) {
  //       trueOnes.add(boo);
  //     }
  //   }
  //   var trueCount = trueOnes.Length;
  //   expect(2).toEqual(trueCount);
  // })
});
