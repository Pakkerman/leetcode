// 0853 - Car Fleet
// https://leetcode.com/problems/car-fleet/

function carFleet(target: number, position: number[], speed: number[]): number {
  const stack: number[] = []
  const cars: { position: number; speed: number }[] = position
    .map((position, idx) => {
      return { position, speed: speed[idx] }
    })
    .sort((a, b) => b.position - a.position)

  for (let i = 0; i < cars.length; i++) {
    const { position, speed } = cars[i]
    const time = (target - position) / speed

    stack.push(time)
    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop()
    }
  }

  return stack.length
}

// console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]), 'Output: 3')
// console.log(carFleet(10, [3], [3]), 'Output: 1')
// console.log(carFleet(100, [0, 2, 4], [4, 2, 1]), 'Output: 1')

function checkAnswer(fn: any, correctResult: number): void {
  if (fn === correctResult) {
    return console.log(`Correctly output: ${fn}`)
  } else {
    console.log(`${fn} is not the correct output, should be ${correctResult}`)
  }
}

checkAnswer(carFleet(10, [3], [3]), 1)
