// 对象间原型继承
var util = require('util')
function Base () {
  this.name = 'base'
  this.base = 'tody'
  this.sayHello = function () {
    console.log('hello' + this.name)
  }
}
Base.prototype.showName = function () {
  console.log(this.name)
}
function SubBase () {
  this.name = 'sub'
}
util.inherits(SubBase, Base)// SubBase继承Base
var objBase = new Base()
objBase.sayHello()
objBase.showName()
console.log(objBase)
var objSubBase = new SubBase()
// objSubBase.sayHello(）
// SubBase只能继承Base在原型中定义的函数，同时在原型中定义的属性不会被console.log作为对象的属性输出
objSubBase.showName()
console.log(objSubBase)

// util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。
function Person () {
  this.name = 'zhangsan'
  this.toString = function () {
    return this.name
  }
}
var obj = new Person()
console.log(util.inspect(obj))
console.log(util.inspect(obj, true))

// util.isArray(object)  如果给定的参数 "object" 是一个数组返回true，否则返回false。
util.isArray([])// true
util.isArray(new Array)// true
util.isArray({})// false

// util.isError(object)
// 如果给定的参数 "object" 是一个错误对象返回true，否则返回false。

util.isError(new Error())
  // true
util.isError(new TypeError())


















