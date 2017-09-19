 // 判断arr是否为一个数组，返回一个bool值
function isArray (arr) {
  if (arr && typeof arr === 'object' && typeof arr.length === 'number' && isFinite(arr.length)) {
    var originLength = arr.length
    arr[arr.length] = 'text'
    var newLength = arr.length
    arr.length = originLength
    return newLength === originLength + 1
  }
  return false
}
// 判断arr是否为一个数组，返回一个bool值 1
function isArray1 (arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

console.log(isArray1([]))
