function canConstruct(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false

  let magazineArray = magazine.split('')
  let result = ransomNote.split('').every((item) => {
    const index = magazineArray.indexOf(item)
    console.log(index)
    if (index === -1) return false
    magazineArray = magazineArray.filter((_, idx) => idx !== index)
    console.log(magazineArray)
    return true
  })

  return result
}

// console.log(canConstruct('a', 'b'))
console.log(canConstruct('aa', 'ab'))
console.log(canConstruct('aa', 'aab'))

// 'aa' split 'a', 'a' => a found in 'aab' return true => slice => 'ab'
// 'a' remain, 'a' => found in 'ab' => slice => a => 'b' remain => return true
// ransom.length = 0 => return result
