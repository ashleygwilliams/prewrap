const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
const assert = require('assert')

const preWrap = require('../')

describe('prewrap', function () {
  it('wraps a string in "```"', function () {
    const string = 'hello'
    const wrappedString = '```\nhello\n```'
    assert(preWrap(string) === wrappedString)
  })
})
