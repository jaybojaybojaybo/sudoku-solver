import {reorderArray} from './../src/sudoku.js';

describe('reorderArray', function() {
  it('should be a reordered Array', function() {
    let checkArray = reorderArray([8,3,7,2,5,4,9,1,6]);
    let testArray = [1,2,3,4,5,6,7,8,9];
    expect(checkArray).toEqual(testArray);
  });
});
