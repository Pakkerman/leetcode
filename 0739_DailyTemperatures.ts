// 0739 - Daily Temperatures
// https://leetcode.com/problems/daily-temperatures/

// Time: O(N), Space:(N)
function dailyTemperatures(t: number[]): number[] {
  const stack: { temp: number; idx: number }[] = []
  const out: number[] = new Array(t.length).fill(0)

  for (let i = 0; i < t.length; i++) {
    const currTemp = t[i]
    while (stack.length && currTemp > stack[stack.length - 1].temp) {
      const idx = stack.pop()?.idx as number
      out[idx] = i - idx
    }

    stack.push({ temp: currTemp, idx: i })
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

console.log(dailyTemperatures(a), 'Output: [1,1,4,2,1,1,0,0]')
console.log(dailyTemperatures(b), 'Output: [1,1,1,0]')
console.log(dailyTemperatures(c), 'Output: [1,1,0]')
