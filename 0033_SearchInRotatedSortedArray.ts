// 0033 - Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/

function search(nums: number[], target: number): number {
    // 1. Get pivot via binary search
    // 2. Get the portion of the array to search
    // 3. Regular binary search and reture target's index

    if (nums.length === 0 || !nums) return -1
    if (nums.length === 1) {
        return nums[0] === target ? 0 : -1
    }

    let lo = 0
    let hi = nums.length - 1
    while (lo < hi) {
        const [mid, val] = getMid(nums, lo, hi)
        if (val > nums[hi]) {
            lo = mid + 1
        } else {
            hi = mid
        }
    }

    const pivot = lo
    lo = 0
    hi = nums.length - 1

    if (nums[pivot] <= target && target <= nums[hi]) {
        lo = pivot
    } else {
        hi = pivot - 1
    }

    while (lo <= hi) {
        const [mid, val] = getMid(nums, lo, hi)

        if (val === target) return mid
        if (target < val) {
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }

    return -1
}

const a = [4, 5, 6, 7, 0, 1, 2]
const b = [4, 5, 6, 7, 0, 1, 2]
const c = [1]
const d = [1, 3]

console.log(search(a, 0), ">> 4")
console.log(search(b, 3), ">> -1")
console.log(search(c, 0), ">> -1")
console.log(search(d, 3), ">> 1")

function getMid<T>(array: T[], lo: number, hi: number): [idx: number, val: T] {
    const idx = Math.floor(lo + (hi - lo) / 2)
    const val = array[idx]
    return [idx, val]
}
