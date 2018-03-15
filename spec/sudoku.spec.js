import {SudokuBoard} from '../src/sudoku'

describe('SudokuBoard', function () {
  it('should be an array', function () {
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
    ])
    expect(testArray.sudokuArray).toBeArray(true)
  })

  it('should be an array containing 9 individual arrays', function () {
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
    ])
    expect(testArray.sudokuArray).toBeNonEmptyArray(true)
  })

  it('should compare array at index [0] to an answer', function () {
    const answer = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let testArray = new SudokuBoard([
      [8, 3, 7, 2, 5, 4, 9, 1, 6],
      [9, 2, 1, 8, 7, 6, 5, 3, 4],
      [5, 4, 6, 3, 9, 1, 8, 2, 7],
      [6, 5, 2, 1, 4, 8, 7, 9, 3],
      [1, 8, 9, 7, 6, 3, 2, 4, 5],
      [3, 7, 4, 9, 2, 5, 1, 6, 8],
      [7, 6, 5, 4, 1, 2, 3, 8, 9],
      [2, 9, 8, 6, 3, 7, 4, 5, 1],
      [4, 1, 3, 5, 8, 9, 6, 7, 2]]
    )
    let sortedArray = testArray.sudokuArray[0].sort()
    expect(sortedArray).toEqual(answer)
  })

  // it('should compare each array in a parent array to the answer', function(){
  //   const answer = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   let testArray = new SudokuBoard([
  //         [8,3,7,2,5,4,9,1,6],
  //         [9,2,1,8,7,6,5,3,4],
  //         [5,4,6,3,9,1,8,2,7],
  //         [6,5,2,1,4,8,7,9,3],
  //         [1,8,9,7,6,3,2,4,5],
  //         [3,7,4,9,2,5,1,6,8],
  //         [7,6,5,4,1,2,3,8,9],
  //         [2,9,8,6,3,7,4,5,1],
  //         [4,1,3,5,8,9,6,7,2]]
  //       );
  //   let submittedArray = testArray.sudokuCheck();
  //   expect(submittedArray.length).toEqual(testArray.sudokuArray.length);
  // })

  // it('should add element from array at specific index to a new array', function(){
  //   const answer = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   let testArray = new SudokuBoard([
  //         [8,3,7,2,5,4,9,1,6],
  //         [9,2,1,8,7,6,5,3,4],
  //         [5,4,6,3,9,1,8,2,7],
  //         [6,5,2,1,4,8,7,9,3],
  //         [1,8,9,7,6,3,2,4,5],
  //         [3,7,4,9,2,5,1,6,8],
  //         [7,6,5,4,1,2,3,8,9],
  //         [2,9,8,6,3,7,4,5,1],
  //         [4,1,3,5,8,9,6,7,2]]
  //       );
  //   let testVerts = [8,9,5,6,1,3,7,2,4];
  //   let resultVerts = testArray.vertify();
  //   expect(testVerts).toEqual(resultVerts[0]);
  // })

  // it('should cut sudokuArray into 9 grid arrays', function(){
  //   const answer = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   let testArray = new SudokuBoard([
  //         [8,3,7,2,5,4,9,1,6],
  //         [9,2,1,8,7,6,5,3,4],
  //         [5,4,6,3,9,1,8,2,7],
  //         [6,5,2,1,4,8,7,9,3],
  //         [1,8,9,7,6,3,2,4,5],
  //         [3,7,4,9,2,5,1,6,8],
  //         [7,6,5,4,1,2,3,8,9],
  //         [2,9,8,6,3,7,4,5,1],
  //         [4,1,3,5,8,9,6,7,2]]
  //       );
  //   let testGrids = [6,5,2,1,8,9,3,7,4];
  //   let resultGrids = testArray.gridify();
  //   console.log(resultGrids);
  //   expect(testGrids).toEqual(resultGrids[1]);
  // })

  it('should return a parent array containing 27 arrays', function () {
    const answer = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let testArray = new SudokuBoard([
      [8, 3, 7, 2, 5, 4, 9, 1, 6],
      [9, 2, 1, 8, 7, 6, 5, 3, 4],
      [5, 4, 6, 3, 9, 1, 8, 2, 7],
      [6, 5, 2, 1, 4, 8, 7, 9, 3],
      [1, 8, 9, 7, 6, 3, 2, 4, 5],
      [3, 7, 4, 9, 2, 5, 1, 6, 8],
      [7, 6, 5, 4, 1, 2, 3, 8, 9],
      [2, 9, 8, 6, 3, 7, 4, 5, 1],
      [4, 1, 3, 5, 8, 9, 6, 7, 2]]
    )
    let checkedArray = testArray.sudokuCheck()
    console.log(checkedArray)
    expect(27).toEqual(checkedArray.length)
  })
})
