// 把类数组对象编程真正的数组 1
function becomeArray () {
  return Array.prototype.slice.call(arguments)
}
// 把类数组对象变成真正的数组 2
function toArray (obj) {
  console.log(obj)
  var arr = []
  for (var i = 0; i < obj.length; i++) {
    console.log(obj.length)
    arr.push(obj[i])
  }
  return arr
}
var a = (5, 2, 3, 4)
var arr = becomeArray(1, 2, 3, 4)
// var arr1 = toArray(a)
console.log(arr)
// console.log(arr1)
// var list1 = list(arr)//???
// console.log(list1)
