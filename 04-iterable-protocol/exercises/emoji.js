/*
  Exercise
  Let's implement an iterable over all the emojis of a given text.

  This iterator should behave as follows:

  - If you create the iterable with the `text`: "Hello 👋 World 🌎"
  - You should be able to do a `for ... of` loop over the iterable and get '👋'
    for the first iteration and '🌎' for the second.

  Try to implement this iterable using 3 different styles:

  - With a factory function
  - With a class
  - With a generator

  TIPS:

  - You can convert a string into an array of unicode characters with `Array.from(str)`
  - If you use a `for ... of` over a string, every element will be a unicode character
  - A simple way to test if a given unicode character is an emoji is: `char.match(/\p{Emoji}/u) !== null`
*/

// Exactly the same implementation as in 03-iterator-protocol is used, 
// only the Symbol-iterator-part is added to make everything iterable
export function createEmojiIter (text) {
  let index = 0
  const chars = Array.from(text)

  return {
    next () {
      while (index < chars.length) {
        const char = chars[index++]
        if (char.match(/\p{Emoji}/u) !== null) {
          return { done: false, value: char }
        }
      }

      return { done: true, value: undefined }
    }, [Symbol.iterator] () { return this } // this addition makes everything iterable
  }
}

export class EmojiIter {
  constructor (text) {
    this.chars = Array.from(text)
    this.index = 0
  }

  next () {
    while (this.index < this.chars.length) {
      const char = this.chars[this.index++]
      if (char.match(/\p{Emoji}/u) !== null) {
        return { done: false, value: char }
      }
    }
    return { done: true, value: undefined }
  } [Symbol.iterator] () { return this } 
}

// No "Symbol.iterator"-declaration. needed for generators
export function * emojiIterGen (text) {
  for (const char of text) {
    if (char.match(/\p{Emoji}/u) !== null) {
      yield char
    }
  }
}
