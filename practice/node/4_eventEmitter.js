// 引入 events 模块
var events = require('events')
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter()
eventEmitter.on('some_event', function () {
  console.log('some_event 事件触发1')
})
setTimeout(function () {
  eventEmitter.emit('some_event')
}, 2000)

var EventEmitter = require('events').EventEmitter
var event = new EventEmitter()
event.on('some_event', function () {
  console.log('some_event 事件触发2')
})
setTimeout(function () {
  event.emit('some_event')
}, 5000)

var eventss = require('events')
var emitter = new eventss.EventEmitter()
emitter.on('someEvent', function (arg1) {
  console.log('listener1', arg1)
})
emitter.on('someEvent', function (arg1, arg2) {
  console.log('listener2', arg1, arg2)
})
// emitter.on('someEvent', function (arg1, arg2, arg3) {
//   console.log('listener3', arg1, arg2, arg3)
// })
// emitter.on('someEvent', function (arg1, arg2, arg3, arg4) {
//   console.log('listener4', arg1, arg2, arg3, arg4)
// })
emitter.emit('someEvent', '参数arg1', '参数arg2', '参数arg3', '参数arg4')

var listener1 = function listener1 () {
  console.log('监听器listener1')
}
var listener2 = function listener2 () {
  console.log('监听器listener2')
}
emitter.addListener('out', listener1)
emitter.addListener('out', listener2)
emitter.on('out', listener2)
emitter.once('out', listener1)  // 触发一次，出发后立即解除，不加入计数器中
emitter.emit('out')

var count = require('events').EventEmitter.listenerCount(emitter, 'out') // require('events').EventEmitter必须这么写
console.log(count)

// 移除绑定的listener1
emitter.removeListener('out', listener1)
console.log('listener1 不再受监控！')















