var fs = require('fs')
// 输入流
var str = 'today is a new day'
var writeStream = fs.createWriteStream('input.js')
writeStream.write(str, 'UTF8')
writeStream.end()
writeStream.on('finish', function () {
  console.log('writed')
})
writeStream.on('error', function (err) {
  console.log(err.stack)
})
console.log('程序执行完成1')

// 取数据
var data = ''
var readerStream = fs.createReadStream('input.txt')  // c创建可读流
readerStream.setEncoding('UTF8')  // 设置编码
readerStream.on('data', function (elem) {
  data += elem
})
readerStream.on('end', function () {
  console.log(data)
})
readerStream.on('error', function (err) {
  console.log(err.stack)
})
console.log('程序执行完成2')


