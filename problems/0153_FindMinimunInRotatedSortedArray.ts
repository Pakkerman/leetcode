// 0153 - Find Minimum in Rotated Sorted Array
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

//

function findMin(nums: number[]): number {
    // Roatate 1 time means that all items is shifted backwards by 1
    // The original array always has the smallest item in the first position
    // If the first is the smallest that mean the array has rotated length - 1 times
    // Index of the smallest item in the array is the number of times roatated
    // Binary Search the smallest item

    let lo: number = 0
    let hi: number = nums.length - 1
    while (lo < hi) {
        let mid: number = Math.floor(lo + (hi - lo) / 2)
        if (nums[mid] > nums[hi]) {
            lo = mid + 1
        } else {
            hi = mid
        }
    }
    return nums[lo]
}

const a = [3, 4, 5, 1, 2]
const b = [4, 5, 6, 7, 0, 1, 2]
const c = [11, 13, 15, 17]

console.log(findMin(a), ">> 1")
console.log(findMin(b), ">> 0")
console.log(findMin(c), ">> 11")
