//leetcode.com/problems/subsets/
// 78. Subsets
// https://leetcode.com/problems/subsets/

function subsets(nums) {
  const sets = []
  const result = []

  function combination(startingIndex) {
    sets.push([...result])
    console.log('sets.push([...result])', sets)
    // base case
    if (startingIndex == nums.length) return

    for (let i = startingIndex; i < nums.length; i++) {
      result.push(nums[i])
      console.log('result.push(nums[i])', result)
      combination(i + 1)
      console.log('combination(i + 1)')
      result.pop()
      console.log('result.pop()', result)
    }
    return
  }
  combination((startingIndex = 0))
  return sets
}

// console.log(subsets(3))
console.log(subsets([1, 2, 3]))
// [1,2] => [[],[1],[2],[1,2]]
// [1,2,3] => [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
