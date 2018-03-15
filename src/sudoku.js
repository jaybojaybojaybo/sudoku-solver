export class SudokuBoard {
  constructor (sudokuArray) {
    this.sudokuArray = sudokuArray
    this.answer = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }

  vertify () {
    let verts = [[], [], [], [], [], [], [], [], []]
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < this.sudokuArray[i].length; j++) {
        verts[i].push(this.sudokuArray[j][i])
      }
      console.log(verts[j])
      this.sudokuArray.push(verts[i])
    }
    return verts
  }

  gridify () {
    let firstGrids = [[], [], []]
    for (let i = 0; i < this.sudokuArray.length; i++) {
      firstGrids[0].push(this.sudokuArray[i].slice(0, 3))
      firstGrids[1].push(this.sudokuArray[i].slice(3, 6))
      firstGrids[2].push(this.sudokuArray[i].slice(6))
    }
    let secondGrids = [[], [], [], [], [], [], [], [], []]
    secondGrids[0] = [].concat.apply([], firstGrids[0].slice(0, 3))
    secondGrids[1] = [].concat.apply([], firstGrids[0].slice(3, 6))
    secondGrids[2] = [].concat.apply([], firstGrids[0].slice(6))
    secondGrids[3] = [].concat.apply([], firstGrids[1].slice(0, 3))
    secondGrids[4] = [].concat.apply([], firstGrids[1].slice(3, 6))
    secondGrids[5] = [].concat.apply([], firstGrids[1].slice(6))
    secondGrids[6] = [].concat.apply([], firstGrids[2].slice(0, 3))
    secondGrids[7] = [].concat.apply([], firstGrids[2].slice(3, 6))
    secondGrids[8] = [].concat.apply([], firstGrids[2].slice(6))
    for (let j = 0; j < secondGrids.length; j++) {
      this.sudokuArray.push(secondGrids[j])
    }
    return secondGrids
  }

  sudokuCheck () {
    this.vertify()
    this.gridify()
    let massiveArray = this.sudokuArray
    let checkedArrays = []
    for (let i = 0; i < massiveArray.length; i++) {
      let sortedArray = massiveArray[i].sort()
      let checkedArray = []
      for (let j = 0; j < sortedArray.length; j++) {
        if (sortedArray[j] === this.answer[j]) {
          checkedArray.push(this.sudokuArray[i][j])
        } else {
          return 'Hear my cries, hear my call!'
        }
      }
      checkedArrays.push(checkedArray)
    }
    return checkedArrays
  }
}
