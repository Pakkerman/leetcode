// 0074 - Search a 2D Matrix (In O(log(M * N))
// https://leetcode.com/problems/search-a-2d-matrix/description/
function searchMatrix(matrix: number[][], target: number): boolean {
    // 2 binary searchs on for the row and one for the col
    const cols: number = matrix[0].length

    // edge cases
    //  - If the target is out of the range of the matrix completely return false
    if (target < matrix[0][0] || matrix[matrix.length - 1][cols - 1] < target)
        return false

    // First Binary Search to get the row that the target is on
    let top = 0
    let bottom = matrix.length
    let row = 0

    while (top < bottom) {
        row = Math.floor(top + (bottom - top) / 2)
        const start = matrix[row][0]
        const end = matrix[row][cols - 1]
        // if target is in range of the row, break
        if (start <= target && target <= end) break
        // If target is smaller than start, target is in the row above move the bottom, or move top
        if (target < start) {
            bottom = row
        } else if (end < target) {
            top = row + 1
        }
    }

    // second Binary Search
    let lo = 0
    let hi = cols
    while (lo < hi) {
        const mid = Math.floor(lo + (hi - lo) / 2)
        const val = matrix[row][mid]
        if (target === val) return true
        if (target < val) {
            hi = mid
        } else if (val < target) {
            lo = mid + 1
        }
    }

    return false
}

const a = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
]

console.log(searchMatrix(a, 3))
