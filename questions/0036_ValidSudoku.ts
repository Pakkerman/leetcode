function hasDuplicate(block: string[]): boolean {
  const set = new Set<string>()
  for (let i = 0; i < block.length; i++) {
    if (block[i] === '.') continue
    if (!set.has(block[i])) {
      set.add(block[i])
      continue
    }
    return true
  }
  return false
}

function isValidSudoku(board: string[][]): boolean {
  // check row
  for (let i = 0; i < 9; i++) {
    if (hasDuplicate(board[i])) return false
    const col: string[] = []
    for (let k = 0; k < 9; k++) {
      col.push(board[k][i])
    }
    if (hasDuplicate(col)) return false
  }

  // check block
  const blocks: string[][][] = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ]

  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      blocks[Math.floor(y / 3)][Math.floor(x / 3)].push(board[y][x])
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
      if (hasDuplicate(blocks[i][k])) return false
    }
  }

  return true
}

const board1 = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]

const board2 = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]

console.log(isValidSudoku(board1), '>> true')
console.log(isValidSudoku(board2), '>> false')
