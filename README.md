# prewrap
> wrap a string in ```

```
npm install prewrap --save
```

## usage

```js
const preWrap = require('prewrap')

const text = "a string to be wrapped"
const wrappedText = preWrap(text)

console.log(wrappedText)
// => "```\na string to be wrapped\n```"
```
