// 类选择器1
    // 缺陷是aa-bb也会被选中
function getClass (clsName, context) {
  var result = []
  context = context || document
  var arr = context.getElementsByTagName('*')
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].className.indexOf(clsName) !== -1) {
      result.push(arr[i])
    }
  }
  return result
}
// 类选择器2
function getByClass (sClass, oParent) {
  // 高级浏览器支持getElementsByClassName直接使用
  oParent = oParent || document
  if (oParent.getElementsByClassName) {
    return oParent.getElementsByClassName(sClass)
  } else {
      // 不支持需要选中所有标签的类名来选取
    var res = []
    var aAll = oParent.getElementsByTagName('*')
    for (var i = 0; i < aAll.length; i++) {
        // 选中标签的全部类名是个str='btn on red'=aAll[i].className   使用正则  reg=/\b sClass \b/g
      var reg = new RegExp('\\b' + sClass + '\\b', 'g')
      if (reg.test(aAll[i].className)) {
        res.push(aAll[i])
      }
    }
    return res
  }
}

// var oDiv = getByClass('bb')
// console.log(oDiv)

