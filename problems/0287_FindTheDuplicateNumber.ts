// 0287 - Find the Duplicate Number
// https://leetcode.com/problems/find-the-duplicate-number/

// Floyd's Algorithm

function findDuplicate(nums: number[]): number {
    let slow = nums[0]
    let fast = nums[0]

    while (true) {
        slow = nums[slow]
        fast = nums[nums[fast]]
        if (slow === fast) break
    }

    // set slow back to head
    slow = nums[0]
    // Find the point of the cycle started, doesn't make sense at a glance,
    // but it does produce the cycle start opint when the slow and fast meet again
    // It's the magic of Floyd's Algorithm
    while (slow !== fast) {
        fast = nums[fast]
        slow = nums[slow]
    }
    return slow
}

// value is the pointer to the next node

// example1:  0 -> 3 -> 2 <-> 4

// example2: 0 -> 4 -> 2 -> 3
//                ^_________|
