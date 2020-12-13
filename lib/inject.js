/**
 * 移动端版本事件注入
 */

var makeFunc = function (cb) {
  return function () {
    if (location.href.includes('index2.html') === false) return
    return cb(...arguments)
  }
}

var M = {
  notifications: {
    init: makeFunc(function(options) {
      console.log('notifications init', options)
    }),
    notify: makeFunc(function (module, text, noQueue) {
      console.log(module, text, noQueue)
    }),
    printMessage: makeFunc(function(t) {
      console.log(t)
    })
  }
}