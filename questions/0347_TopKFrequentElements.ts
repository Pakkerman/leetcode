// 0347 - Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/description/

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    let count = map.get(nums[i])
    if (!count) {
      count = 0
    }
    map.set(nums[i], count + 1)
  }

  let find = k
  const result: number[] = []

  while (find > 0) {
    let mostFrequent = 0
    let mostFrequentKey = -1
    for (const key of map.keys()) {
      const count = map.get(key)!
      if (count > mostFrequent) {
        mostFrequent = count
        mostFrequentKey = key
      }
    }
    result.push(mostFrequentKey)
    map.delete(mostFrequentKey)
    find--
  }

  return result
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
