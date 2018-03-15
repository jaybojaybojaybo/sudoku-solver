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
    return checkedArrays;
  }

  sudokufy() {
    let verts = [[],[],[],[],[],[],[],[],[]];
    for(let i = 0; i < this.sudokuArray.length; i++){
      for(let j = 0; j < this.sudokuArray[i].length; j++){
        verts[i].push(this.sudokuArray[j][i]);
        console.log(verts);
      }
    }
    return verts;
  }
}
