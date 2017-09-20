function say (word) {
  console.log(word)
}

function execute (someFunction, value) {
  someFunction(value)
}

execute(say, 'Hello')

function execute1 (someFunction, value) {
  someFunction(value)
}

execute1(function (word) { console.log(word) }, 'Hello11')

// 函数传递是如何让HTTP服务器工作的
var http = require('http')
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.write('Hello World')
  // response.end()
  response.end('    Hello World8888\n')
}).listen(8888)

// var http = require('http')
