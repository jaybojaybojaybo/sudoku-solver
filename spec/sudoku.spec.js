import {SudokuBoard} from '../src/sudoku';

describe('SudokuBoard', function(){
  it('should be an array', function(){
    let testArray = new SudokuBoard([
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ]);
    expect(testArray.sudokuArray).toBeArray(true);
  })
  it('should be an array containing 9 individual arrays', function(){
    let testArray = new SudokuBoard([
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ]);
    expect(testArray.sudokuArray).toBeNonEmptyArray(true);
  })
})


//
// describe('SudokuBoard', function(){
//   it('should construct an array containing 9 arrays', function(){
//     let testArray = new SudokuBoard(
//       [8,3,7,2,5,4,9,1,6],
//       [9,2,1,8,7,6,5,3,4],
//       [5,4,6,3,9,1,8,2,7],
//       [6,5,2,1,4,8,7,9,3],
//       [1,8,9,7,6,3,2,4,5],
//       [3,7,4,9,2,5,1,6,8],
//       [7,6,5,4,1,2,3,8,9],
//       [2,9,8,6,3,7,4,5,1],
//       [4,1,3,5,8,9,6,7,2]
//     );
//     expect(testArray).toEqual(9);
//   })
// })
