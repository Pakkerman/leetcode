// 0118. Pascal's Triangle
//https://leetcode.com/problems/pascals-triangle/description/

function generate(numRows: number): number[][] {
  if (numRows === 0) return []
  if (numRows === 1) return [[1]]

  const result = [] as any[]
  for (let i = 0; i < numRows; i++) {
    const array = new Array(i + 1).fill(1)
    array[0] = 1
    array[array.length - 1] = 1
    result.push(array)

    if (result[i].length > 2) {
      for (let k = 1; k < array.length - 1; k++) {
        array[k] = result[i - 1][k - 1] + result[i - 1][k]
      }
    }
  }
  return result
}

// create new Array in every new iteration with len of i + 1
// push new Array into result => [[1], [1,1], [1,1,1], ...]
