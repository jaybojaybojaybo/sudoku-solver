export class SudokuBoard {
  constructor (sudokuArray) {
    this.sudokuArray = sudokuArray;
    this.answer = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  sudokuCheck() {
    let checkedArrays = [];
    for(let i = 0; i < this.sudokuArray.length; i++){
      let sortedArray = this.sudokuArray[i].sort();
      let checkedArray = [];
      for(let j = 0; j < sortedArray.length; j++){
        if(sortedArray[j] === this.answer[j]){
          checkedArray.push(this.sudokuArray[i][j]);
        } else {
          return "Hear my cries, hear my call!";
        }
      }
      checkedArrays.push(checkedArray);
    }
    console.log(checkedArrays)
    return checkedArrays;
  }

  sudokufy() {

  }
}
