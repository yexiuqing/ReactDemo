var fs = require('fs')
var data = fs.readFileSync('input.txt')
console.log(data.toString())
console.log('程序执行结束')

console.log('分割线————————————————')

fs.readFile('input.txt', function (err, data) {
  if (err) return console.error(err)
  // if (err) return console.log(err.stack)
  console.log(data.toString())
})
console.log('程序执行结束!')
