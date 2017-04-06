const PRE_TEXT = '```'

module.exports = function (string) {
  return `${PRE_TEXT}\n${string}\n${PRE_TEXT}`
}
