// 管道流
var fs = require('fs')
var writeStream = fs.createWriteStream('input.js')
var readerStream = fs.createReadStream('input.txt')  // c创建可读流
// 把input.txt内容写到 input.js
readerStream.pipe(writeStream)
console.log('程序执行完成3')
