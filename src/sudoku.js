function sudokify(myTableArray) {
  let answer = [
    1,1,1,1,1,1,1,1,1,
    2,2,2,2,2,2,2,2,2,
    3,3,3,3,3,3,3,3,3,
    4,4,4,4,4,4,4,4,4,
    5,5,5,5,5,5,5,5,5,
    6,6,6,6,6,6,6,6,6,
    7,7,7,7,7,7,7,7,7,
    8,8,8,8,8,8,8,8,8,
    9,9,9,9,9,9,9,9,9];
  let output = myTableArray.sort();
  let wrong = "Sudoku is incorrect.";
  for (let i = 1; i < 28; i++)
    if (output != answer)
    {
      return wrong;
    }
  return output;
}

exports.sudokifyModule = sudokify;
