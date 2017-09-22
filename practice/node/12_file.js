var fs = require('fs')
fs.readFile('input.txt', function (err, data) {
  if (err) {
    return console.log(err)
  }
  console.log('异步读取\n' + data.toString() + '\n')
})
var data = fs.readFileSync('input.txt')
console.log('同步读取\n' + data.toString() + '\n')
console.log('程序执行完毕\n')

// 打开文件  fs.open(path, flags[, mode], callback)
console.log('准备打开文件')
fs.open('input.txt', 'r+', function (err, fd) {
  if (err) {
    return console.log(err)
  }
  console.log('打开文件成功！\n')
})

// 通过异步模式获取文件信息
// fs.stat(path)执行后，会将stats类的实例返回给其回调函数。可以通过stats类中的提供方法判断文件的相关属性。例如判断是否为文件：
fs.stat('./input.txt', function (err, stats) {
  if (err) {
    return console.log(err)
  }
  console.log(stats.isFile())
})

// 创建文件
console.log('准备打开文件！\n ')
fs.stat('./input.txt', function (err, stats) {
  if (err) {
    return console.log(err)
  }
  console.log(stats)
  console.log('读取文件信息成功！\n')
  // 检测文件类型
  console.log('是否为文件（isFile）?' + stats.isFile())
  console.log('是否为目录（isDirectory）？' + stats.isDirectory())
})

// 写入文件
console.log('准备写入文件(\n')
fs.writeFile('input.txt', '我是通过写入的文件内容！', function (err) {
  if (err) {
    return console.error(err)
  }
  console.log('写入数据成功\n')
  console.log('----------分割线----------')
  console.log('读取写入的数据')
  fs.readFile('input.txt', function (err, data) {
    if (err) {
      return console.error(err)
    }
    console.log('异步读取文件数据：' + data.toString())
  })
})

// 读取文件
var buf = new Buffer(1024)
console.log('准备打开已存在的文件！')
fs.open('input.txt', 'r+', function (err, fd) {
  if (err) {
    return console.error(err)
  }
  console.log('文件打开成功！\n')
  console.log('准备读取文件！\n')
  fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
    if (err) {
      return console.error(err)
    }
    console.log(bytes + '  字节被读取')

    // 仅输出读取的字节
    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString())
    }
  })
})

// 关闭文件
console.log('准备打开文件！')
fs.open('input.txt', 'r+', function (err, fd) {
  if (err) {
    return console.error(err)
  }
  console.log('文件打开成功！')
  console.log('准备读取文件！')
  fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
    if (err) {
      console.log(err)
    }
    // 仅输出读取的字节
    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString())
    }
    // 关闭文件
    fs.close(fd, function (err) {
      if (err) {
        console.log(err)
      }
      console.log('文件关闭成功')
    })
  })
})

//截取文件
console.log('准备打开文件！')
fs.open('input.txt', 'r+', function (err, fd) {
  if (err) {
    return console.error(err)
  }
  console.log('文件打开成功！')
  console.log('截取10字节后的文件内容。')

  // 截取文件
  fs.ftruncate(fd, 10, function (err) {
    if (err) {
      console.log(err)
    }
    console.log('文件截取成功。')
    console.log('读取相同的文件')
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
      if (err) {
        console.log(err)
      }

    // 仅输出读取的字节
      if (bytes > 0) {
        console.log(buf.slice(0, bytes).toString())
      }

     // 关闭文件
      fs.close(fd, function (err) {
        if (err) {
          console.log(err)
        }
        console.log('文件关闭成功！')
      })
    })
  })
})

// 删除文件
console.log('准备删除文件！')
fs.unlink('input.txt', function (err) {
  if (err) {
    return console.error(err)
  }
  console.log('文件删除成功！')
})

















