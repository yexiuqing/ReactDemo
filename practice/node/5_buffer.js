var buf = new Buffer(256)
var len = buf.write('www.runoob.com')
console.log('写入字数:' + len)
// 缓冲区合并
var buffer1 = new Buffer('今天')
var buffer2 = new Buffer('的天气是：阴雨')
var buffer3 = Buffer.concat([buffer1, buffer2])
console.log(buffer3.toString())
// 缓冲区比较
var buf1 = new Buffer('abc')
var buf2 = new Buffer('abcdefg')
var result = buf1.compare(buf2)
if (result < 0) {
  console.log(buf1 + ' in ' + buf2 + ' front')
} else if (result === 0) {
  console.log(buf1 + ' and ' + buf2 + ' same')
} else {
  console.log(buf1 + ' in ' + buf2 + ' after')
}
// 拷贝缓存区
var buff = new Buffer(2)
buf1.copy(buff)
console.log('buff content: ' + buff.toString())
// 比较
console.log(buf1.equals(buf2))
// 裁剪
console.log('裁剪' + buf1.slice(0, 1))  // 不包括索引为1的字符
console.log('裁剪' + buf1.slice(-3, -1)) // 尾部开始算
