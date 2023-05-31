// 0739 - Daily Temperatures
// https://leetcode.com/problems/daily-temperatures/

type Day = { temp: number; idx: number }

// Time: O(N), Space:(N)
function dailyTemperatures(t: number[]): number[] {
    const stack: Day[] = []
    const out: number[] = new Array(t.length).fill(0)

    for (let i = 0; i < t.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1].temp < t[i]) {
            const { idx } = stack.pop() as Day
            out[idx] = i - idx
        }
        stack.push({ temp: t[i], idx: i })
    }

    return out
}
// brute
// function dailyTemperatures(temperatures: number[]): number[] {
//   const t = temperatures
//   const out: number[] = new Array(temperatures.length).fill(0)

//   for (let i = 0; i < temperatures.length; i++) {
//     let days = 1
//     for (let k = i + 1; k < temperatures.length; k++) {
//       if (t[i] < t[k]) {
//         out[i] = days
//         break
//       }
//       days++
//     }
//   }

//   return out
// }

const a: number[] = [73, 74, 75, 71, 69, 72, 76, 73]
const b: number[] = [30, 40, 50, 60]
const c: number[] = [30, 60, 90]

console.log(dailyTemperatures(a), "Output: [1,1,4,2,1,1,0,0]")
console.log(dailyTemperatures(b), "Output: [1,1,1,0]")
console.log(dailyTemperatures(c), "Output: [1,1,0]")
