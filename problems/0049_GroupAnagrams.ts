// 0049 - Group Anagrams
// https://leetcode.com/problems/group-anagrams/
// function groupAnagrams(strs: string[]): string[][] {
//     // sort every item,
//     // create a map with the sorted string as key and value as the original strings
//     // return an array with each key's value as a sub array

//     // m: strs length
//     // n: word length
//     // time: O(m * nlogn)
//     const map = new Map<string, string[]>()

//     strs.forEach(item => {
//         const key = item.split('').sort().join('')
//         const strArray = map.get(key)
//         if(strArray === undefined) {
//             map.set(key, [item])
//             return
//         }
//         map.set(key, [...strArray, item])
//     })

//     const out: string[][] = []
//     for(let value of map.values()){
//         out.push(value)
//     }

//     return out
// };

function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map<string, string[]>()

  for (let i = 0; i < strs.length; i++) {
    const count: number[] = new Array(26).fill(0)
    for (let k = 0; k < strs[i].length; k++) {
      count[strs[i].charCodeAt(k) - 97]++
    }
    const key = count.join(',')
    const values = map.get(key)
    if (!values) {
      map.set(key, [strs[i]])
      continue
    }
    map.set(key, [...values, strs[i]])
  }
  const out: string[][] = []
  for (let item of map.values()) {
    out.push(item)
  }
  return out
}
const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
const str2 = ['bdddddddddd', 'bbbbbbbbbbc']
// console.log(groupAnagrams(strs))
console.log(groupAnagrams(str2))
