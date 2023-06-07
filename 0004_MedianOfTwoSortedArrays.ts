// 0004 - Median of Two Sorted Array
// https://leetcode.com/problems/median-of-two-sorted-arrays/description/

function findMedianSortedArrays(a: number[], b: number[]): number {
  // Set a to be the shorter array
  if (a.length > b.length) [a, b] = [b, a]
  const totalLen = a.length + b.length
  const halfLen = Math.floor(totalLen / 2)

  let lo = 0
  let hi = a.length - 1

  while (true) {
    const midA = lo + hi
    const midB = midA - halfLen - 2

    const aLeft = getLeft(a, midA)
    const bLeft = getLeft(b, midB)
    const aRight = getRight(a, midA)
    const bRight = getRight(b, midB)

    if (aLeft <= bRight && bLeft <= aRight) {
      if (totalLen % 2 === 0)
        return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2
      return Math.min(aRight, bRight)
    }

    if (aLeft <= bRight) lo = midA + 1
    if (bRight < aLeft) hi = midA - 1
  }
}

function getLeft(arr, idx): number {
  return 0 <= idx ? arr[idx] : -Infinity
}
function getRight(arr, idx): number {
  return idx + 1 < arr.length ? arr[idx + 1] : Infinity
}

const a = [1, 2, 3, 4]
const b = [1, 2, 3, 4, 5, 6, 7]

console.log(findMedianSortedArrays(b, a))
