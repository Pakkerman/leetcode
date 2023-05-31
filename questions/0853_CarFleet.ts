// 0853 - Car Fleet
// https://leetcode.com/problems/car-fleet/

// May 25 2023
// Calculate the speed to the destination in advance

type Cars = { pos: number; time: number }

function carFleet(target: number, position: number[], speed: number[]): number {
    const stack: number[] = []
    const cars: Cars[] = position
        .map((pos, idx) => {
            return { pos, time: (target - pos) / speed[idx] }
        })
        .sort((a, b) => b.pos - a.pos)

    for (let i = 0; i < cars.length; i++) {
        if (
            stack.length > 0 &&
            stack[stack.length - 1] <= stack[stack.length - 2]
        ) {
            stack.pop()
        }

        stack.push(cars[i].time)
    }

    return stack.length
}

// May 24
// function carFleet(target: number, position: number[], speed: number[]): number {
//   const stack: number[] = []
//   const cars: { pos: number; speed: number }[] = position
//     .map((pos, idx) => {
//       return { pos, speed: speed[idx] }
//     })
//     .sort((a, b) => b.pos - a.pos)

//   console.log(cars)

//   for (let i = 0; i < cars.length; i++) {
//     const { pos, speed } = cars[i]
//     const time = (target - pos) / speed
//     stack.push(time)

//     if (
//       stack.length > 1 &&
//       stack[stack.length - 1] <= stack[stack.length - 2]
//     ) {
//       stack.pop()
//     }
//   }

//   console.log(stack)

//   return stack.length
// }

checkAnswer(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]), 3)
// checkAnswer(carFleet(10, [3], [3]), 1)
// checkAnswer(carFleet(100, [0, 2, 4], [4, 2, 1]), 1)

function checkAnswer(fn: any, correctResult: number): void {
    if (fn === correctResult) {
        return console.log(`Correctly output: ${fn}`)
    } else {
        console.log(
            `${fn} is not the correct output, should be ${correctResult}`
        )
    }
}
