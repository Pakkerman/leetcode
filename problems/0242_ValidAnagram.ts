// 0242 - Valid Anagram
// https://leetcode.com/problems/valid-anagram/description/

// function isAnagram(s: string, t: string): boolean {
//   if (s.length != t.length) return false
//   const input = s.split('').sort().join('')
//   const target = t.split('').sort().join('')

//   return input === target
// }

// hash map

function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) return false

  const mapS = createMap(s)
  const mapT = createMap(t)

  for (let i of mapS.keys()) {
    if (mapS.get(i) !== mapT.get(i)) return false
  }

  return true
}

function createMap(str: string): Map<string, number> {
  const map = new Map()

  for (let i = 0; i < str.length; i++) {
    let count: number = map.get(str[i])
    if (count === undefined) {
      count = 0
      map.set(str[i], 0)
    }
    map.set(str[i], count + 1)
  }
  return map
}

console.log(isAnagram('anagram', 'nagaram'), '>> true')
console.log(isAnagram('rat', 'car'), '>> false')
