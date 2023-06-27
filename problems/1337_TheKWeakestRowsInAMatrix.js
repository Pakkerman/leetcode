function kWeakestRows(mat, k) {
  // cal how many solder in each row and map into a new object and
  // and each key is the row, value is the number of soliders

  const rowSoldierCount = {}
  //get data from mat
  mat.forEach((row, index) => {
    rowSoldierCount[index] = row.reduce((prev, curr) => prev + curr)
  })
  //sort rowSoldierCount by value desc
  const sorted = Object.entries(rowSoldierCount).sort((a, b) => a[1] - b[1])
  const ranking = sorted.map((item) => +item[0])
  return ranking.slice(0, k)
}

console.log(
  'result:',
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3
  )
)
console.log(
  'result:',
  kWeakestRows(
    [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
    2
  )
)
