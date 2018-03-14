export class SudokuBoard{
  constructor(sudokuArray){
    this.sudokuArray = sudokuArray;
  }

  sudokify(userBoard) {
    this.sudokuArray[0]
    const answer = [1,2,3,4,5,6,7,8,9];
    let myUserBoard = new Array(userBoard);
    let newarray = myUserBoard[0];
    console.log(newarray);
    let mySudokuBoard = [];
    for(let i = 0; i <= 8; i++){
      let output = new Array(userBoard[i]);
      if(output === answer){
        let wrong = "Try Again!";
        return wrong;
      } else {
        mySudokuBoard.push(output[0]);
      }
    }
    return mySudokuBoard;
  }
}
