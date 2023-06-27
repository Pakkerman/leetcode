// 0042 - Trapping Rain Water
// https://leetcode.com/problems/trapping-rain-water/

// Time: O(N) SPACE:O(1)
function trap(height: number[]): number {
  let total: number = 0
  let left = 0
  let right = height.length - 1
  let maxLeft = height[0]
  let maxRight = height[height.length - 1]

  while (left < right) {
    if (maxLeft >= maxRight) {
      right--
      const area = maxRight - height[right]
      total += Math.max(0, area)
      maxRight = Math.max(height[right], maxRight)
    } else if (maxLeft < maxRight) {
      left++
      const area = maxLeft - height[left]
      total += Math.max(0, area)
      maxLeft = Math.max(height[left], maxLeft)
    }
  }

  return total
}
// let total: number = 0
// let l = 0
// let r = height.length - 1
// let maxLeft = height[0]
// let maxRight = height[height.length - 1]

// while (l < r) {
//   if (maxLeft < maxRight) {
//     l++
//     const area = maxLeft - height[l]
//     total += area > 0 ? area : 0
//     maxLeft = Math.max(maxLeft, height[l])
//   } else if (maxLeft >= maxRight) {
//     r--
//     const area = maxRight - height[r]
//     total += area > 0 ? area : 0
//     maxRight = Math.max(maxRight, height[r])
//   }
// }

// return total

// Time: O(N) SPACE:O(N)
// function trap(height: number[]): number {
//   let totalArea = 0
//   let maxLeft: number[] = new Array(height.length).fill(0)
//   let maxRight: number[] = new Array(height.length).fill(0)
//   let minHeight: number[] = new Array(height.length).fill(0)

//   let l = 0
//   for (let i = 0; i < height.length; i++) {
//     maxLeft[i] = l
//     if (height[i] > l) l = height[i]
//   }
//   let r = 0
//   for (let i = height.length - 1; i >= 0; i--) {
//     maxRight[i] = r
//     if (height[i] > r) r = height[i]
//   }
//   for (let i = 0; i < height.length; i++) {
//     minHeight[i] = Math.min(maxLeft[i], maxRight[i])
//   }

//   for (let i = 0; i < height.length; i++) {
//     const area = minHeight[i] - height[i]
//     if (area < 0) continue
//     totalArea += area
//   }

//   return totalArea
// }

const A = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
const B = [4, 2, 0, 3, 2, 5]
const C = [4, 2, 3]

console.log(trap(A), ' >> 6 ')
console.log(trap(B), ' >> 9 ')
console.log(trap(C), ' >> 1 ')
