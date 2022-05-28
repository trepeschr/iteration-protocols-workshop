/*
  Exercise
  Write a function that implements the fizzBuzz game.

  In fizzBuzz you need to enumerate all the numbers from 1 to `limit`.
  If a number is divisible by 3, rather than enumerating the number itself, you need to use 'Fizz'.
  If a number is divisible by 5, rather than enumerating the number itself, you need to use 'Buzz'.
  If a number is divisible both by 3 and 5, rather than enumerating the number itself, you need to use 'Fizz Buzz'.

  Your function receives the `limit` as an argument and needs to return an array with the fizz buzz sequence from 1 to `limit` (included).

  For instance if `limit` is `15` you should return:

  [
    1,
    2,
    'Fizz', // 3 is divisible by 3
    4,
    'Buzz',  // 5 is divisible by 5
    'Fizz',  // 6 is dibisible by 3
    7,
    8,
    'Fizz',  // 9 is divisible by 3
    'Buzz',  // 10 is divisible by 5
    11,
    'Fizz',  // 12 is divisible by 3
    13,
    14,
    'Fizz Buzz' // 15 is divisible both by 3 and 5
  ]
*/

/**
 * @description Generates a FizzBuzz-Sequence
 * @param {number} limit
 * @returns {[(string|number)]} seq
 */
export default function fizzBuzz (limit) {
  const seq = []
  
  const getFizzBuzzValueFor = (n) => {
    if(n <= 0) return 0

    const isFizz = number => number % 3 === 0
    const isBuzz = number => number % 5 === 0

    if(isFizz(n) && isBuzz(n)) { return "Fizz Buzz" }
    else if(isFizz(n)) { return "Fizz" }
    else if(isBuzz(n)) { return "Buzz" }
    return "" + n
  }

  for(let j=1; j <= limit; ++j) {
    seq.push(getFizzBuzzValueFor(j));
  }
  console.log(seq)
  return seq
}