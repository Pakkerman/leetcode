// // 125. Valid Palindrome
// // https://leetcode.com/problems/valid-palindrome/description/

// /**
//  * @param {string} s
//  * @return {boolean}
//  */

// // Refactored
// function isPalindrome(string) {
//   if (string.length === 1 || string.length === 0) return true
//   string = string
//     .toLowerCase()
//     .split('')
//     .filter((item) => item.match(/[a-z0-9]/))
//     .join('')

//   const len = string.length
//   const middleIndex = len % 2 === 0 ? len / 2 : len / 2 + 1
//   const reversedString = string.slice(middleIndex).split('').reverse().join('')
//   return string.startsWith(reversedString)
// }

// // Recursive will exceed time
// // var isPalindrome = function(s) {
// //      s = s
// //     .toLowerCase()
// //     .split('')
// //     .filter((item) => item.match(/[a-z0-9]/))
// //     .join('')

// //     return check(s)
// //     function check(s){
// //         const len = s.length
// //         if(len === 1 || len === 0) return true
// //         if(s[0] === s[len -1 ]) return isPalindrome(s.slice(1, len -1))
// //         return false
// //     }
// // };

// console.log(isPalindrome('string'))
// console.log(isPalindrome('kayak'))
// console.log(isPalindrome('kayaka'))
// console.log(isPalindrome('A man, a plan, a canal: Panama'))
// console.log(isPalindrome('00p'))
