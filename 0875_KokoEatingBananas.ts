// 0875 - Koko Eating Bananas
// https://leetcode.com/problems/koko-eating-bananas/

function minEatingSpeed(piles: number[], h: number): number {
    let lo = 1
    let hi = Math.max(...piles)
    let minEatTime = hi

    while (lo <= hi) {
        let BPH = Math.floor(lo + (hi - lo) / 2)
        let hours = 0
        for (let i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i] / BPH)
        }
        if (hours <= h) {
            minEatTime = Math.min(minEatTime, BPH)
            hi = BPH - 1
        } else {
            lo = BPH + 1
        }
    }

    return minEatTime
}

function timeToEatEmAll(bananasPerHour: number, piles: number[]): number {
    let time: number = 0
    for (let i = 0; i < piles.length; i++) {
        time += Math.ceil(piles[i] / bananasPerHour)
    }
    return time
}

const a = [3, 6, 7, 11]
const b = [30, 11, 23, 4, 20]
const c = [30, 11, 23, 4, 20]

console.log(minEatingSpeed(a, 8), ">> 4")
console.log(minEatingSpeed(b, 5), ">> 30")
console.log(minEatingSpeed(c, 6), ">> 23")
