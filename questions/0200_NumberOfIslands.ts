// 0200 - Number of Islands
// https://leetcode.com/problems/number-of-islands/submissions/943755130/

type Point = {
  x: number
  y: number
}

const dir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
]

function explore(grid: string[][], curr: Point, seen: boolean[][]): void {
  // out of grid
  if (grid[0].length <= curr.x || curr.y < 0 || grid.length <= curr.y) return

  if (grid[curr.y][curr.x] === '0') {
    seen[curr.y][curr.x] = true
    return
  }
  if (seen[curr.y][curr.x]) return

  seen[curr.y][curr.x] = true
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i]
    explore(grid, { x: curr.x + x, y: curr.y + y }, seen)
  }
}

function numIslands(grid: string[][]): number {
  let islands: number = 0
  const seen: boolean[][] = []
  for (let i = 0; i < grid.length; i++) {
    seen.push(new Array(grid[i].length).fill(false))
  }

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === '1' && !seen[y][x]) islands++
      explore(grid, { x, y }, seen)
    }
  }

  return islands
}

const grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
]

const grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
]

console.log(numIslands(grid), 1)
console.log(numIslands(grid2), 3)

// If is 1 > checx adjeance tiles
//
