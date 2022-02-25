const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    const arr = []
    const arrShuffle = shuffleArray()
    test('returns an array of the same length as the argument sent in', () => {
        expect(arrShuffle.length).toEqual(arr.length)
    })
    test('check to see if an array is returned', () => {
        expect(arrShuffle).toBe([])
})