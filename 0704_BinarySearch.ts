// 0704 - Binary Search
// https://leetcode.com/problems/binary-search/description/
function search(nums: number[], target: number): number {
    let lo = 0
    let hi = nums.length

    while (lo < hi) {
        const mid = Math.floor(lo + (hi - lo) / 2)
        const midVal = nums[mid]
        if (midVal === target) return mid
        if (target < midVal) {
            hi = mid
        } else {
            lo = mid + 1
        }
    }
    return -1
}
