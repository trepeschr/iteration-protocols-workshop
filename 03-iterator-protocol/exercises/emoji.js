/*
  Exercise
  Let's implement an iterator over all the emojis of a given text.

  This iterator should behave as follows:

  - If you have the `text`: "Hello 👋 World 🌎"
  - The first time you call `iter.next()` you should get: `{done: false, value: '👋'}`
  - The second time you call `iter.next()` you should get: `{done: false, value: '🌎'}`
  - The third time you call `iter.next()` you should get: `{done: true, value: undefined}`

  Try to implement this iterator using 3 different styles:

  - With a factory function
  - With a class
  - With a generator

  TIPS:

  - You can convert a string into an array of unicode characters with `Array.from(str)`
  - If you use a `for ... of` over a string, every element will be a unicode character
  - A simple way to test if a given unicode character is an emoji is: `char.match(/\p{Emoji}/u) !== null`
*/

// factory-function approach
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
    }
  }
}

// class-based approach
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
  }
}

//generator-based approach
export function * emojiIterGen (text) {
  for (const char of text) {
    if (char.match(/\p{Emoji}/u) !== null) {
      yield char
    }
  }
}