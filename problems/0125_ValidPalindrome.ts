// 0125 - Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/description/

function check(string: string[], lo: number, hi: number): boolean {
  if (lo > hi) return true
  if (lo === hi) return true
  if (string[lo] !== string[hi]) return false

  return check(string, lo + 1, hi - 1)
}

function isPalindrome(s: string): boolean {
  const trim = s
    .toLowerCase()
    .split('')
    .filter((char) => {
      const code = char.charCodeAt(0)
      return (code >= 97 && code <= 122) || (code >= 48 && code <= 57)
    })

  return check(trim, 0, trim.length - 1)
}

// function isPalindrome(s: string): boolean {
//   const split = s.toLocaleLowerCase().split('')
//   const trim = split.filter((char) => {
//     const code = char.charCodeAt(0)
//     return (code >= 97 && code <= 122) || (code >= 48 && code <= 57)
//   })

//   return trim.join('') === trim.reverse().join('')
// }

// console.log(isPalindrome('string'))
// console.log(isPalindrome('kayak'))
// console.log(isPalindrome('kayaka'))
console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('00p'))
