// 0084 - Largest Rectangle in Histogram
// https://leetcode.com/problems/largest-rectangle-in-histogram/

// time: O(N), space: O(N)
function largestRectangleArea(heights: number[]): number {
    const stack: { start: number; height: number }[] = []
    let maxArea = 0

    for (let i = 0; i < heights.length; i++) {
        let startIdx = i
        while (
            stack.length > 0 &&
            stack[stack.length - 1].height > heights[i]
        ) {
            const { start, height } = stack.pop()!
            const area = (i - start) * height
            maxArea = Math.max(area, maxArea)
            startIdx = start
        }
        stack.push({ start: startIdx, height: heights[i] })
    }

    while (stack.length) {
        const { start, height } = stack.pop()!
        const area = (heights.length - start) * height
        maxArea = Math.max(area, maxArea)
    }

    return maxArea
}

const a = [2, 1, 5, 6, 2, 3]
const b = [2, 4]

console.log(largestRectangleArea(a), ">> 10")
console.log(largestRectangleArea(b), ">> 4")
