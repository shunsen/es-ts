
// setTimeout(function () {
//     var a = "hello";
//     setTimeout(function () {
//         var b = "lagou";
//         setTimeout(function () {
//             var c = "I love you";
//         }, 10)
//     }, 10)
// }, 10)

//
new Promise((resolve, reject) => {
    return setTimeout(function () {
        var a = "hello"
    }, 10)
}).then((resolve, reject) => {
    return setTimeout(function () {
        var b = "lagou"
    }, 10)
}).then((resolve, reject) => {
    return setTimeout(function () {
        var b = "I love you"
    }, 10)
})

new Promise((resolve, reject) => {
    setTimeout(function () {
        var a = "hello"
    }, 10)
}).then((resolve, reject) => {
    setTimeout(function () {
        var b = "lagou"
    }, 10)
}).then(() => {
    setTimeout(function () {
        var b = "I love you"
    }, 10)
})