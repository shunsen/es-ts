1.请说出下列最终的执行结果，并解释为什么？

```javascript
var a = [];
for(var i = 0; i < 10; i++){
    a[i] = function(){
        console.log(i);
    }
}
a[6][0]
```
解答：输出10；a是一个函数数组，当赋值完成后，i已经增长到10了，而由于闭包的原因，所有函数元素返回的都是同一个i，因此不管是用哪个函数元素执行都会返回10

2.请说出下列最终的执行结果，并解释为什么？
```javascript
var temp = 123;
if(true){
    console.log(tmp)
    let temp;
}
```
解答：报错，因为在if条件语句块中声明了同名变量temp，覆盖了外层的temp，但是是用let声明的，存在暂时性死区，console.log函数访问不到，因此会报错(变量微定义)

3.结合es6新语法，用最简单的方式找出数组中的最小值？
```javascript
var arr = [12,34,32,89,4]

```
解答：
```javascript
var arr = [12,34,32,89,4]
const min = Math.min(...arr);
console.log(min)

```
4.请详细说明var,let,const三种声明变量的方式之间的具体差别
解答：var声明的变量，内层优先级高于外层，有声明提升；let无声明提升，有暂时性死区，必须先声明再访问；const表示常量，实质上是指用const声明的变量所指向的内存地址保持不变，如果声明的变量初始化赋值为原始类型，则该变量不可重复赋值，是名副其实的常量，如果初始化赋值为复杂类型，那么其内部属性与方法的改变并不受限，不是真正意义上的常量

5.请说出下列代码最终输出的结果，并解释为什么？
```javascript
var a = 10;
var obj = {
    a:20,
     fn(){
         setTimeout(()=>{
             console.log(this.a)
         })
     }
}
obj.fn();
```
解答：输出20，由于调用fn方法的方式是obj.fn,则再fn函数内this指向obj,正好定时器的回调函数是箭头函数，其this指向与fn内的this一致，因此输出20

6.简述symbol类型的用途

解答：
- 用symbol类型替代常量，避免键名冲突
- 用symbol类型来设置私有属性的
- 注册和获取全局Symbol

7.说说什么是浅拷贝，什么是深拷贝

解答：对于原始类型而言，浅拷贝和深拷贝没啥区别，这个区别主要体现在复杂类型身上，以对象a,b为例，浅拷贝是指将变量a保存的其所指向的对象所在的内存地址拷贝给b,此时发生赋值的是一个内存地址而不是这个地址指向的对象，这个时候通过任何一个变量都能修改对象的值，深拷贝则是指将a所指向对象完整的复制一份存到另外一个内存地址，并把这个新内存地址保存给b,此时通过a，b访问属性方法时互不影响。

8.谈谈你是如何理解js异步编程的，EventLoop是做什么的，什么是宏任务，什么是微任务？

解答：js异步编程是对js同步编程的重要补充。js执行分为同步和异步两种，在同步任务在执行栈执行的过程中，有可能会用到一些耗时操作，这个时候需要注册异步任务，向事件队列添加一个异步任务（有可能是定时器或者其他的什么延时操作），同步任务继续执行直到完成。然后检查事件队列看是否有待执行的事件，如果有，就将其依次放入执行栈中执行，直到异步任务执行完成。同样，当异步任务加载到执行栈中执行的过程中也有可能产生新的异步任务，因此当第一批异步任务执行完成之后，再次查看异步任务队列是否有新任务，有就再拉到执行栈中来执行，如此循环往复。宏任务是指直接进入执行栈中同步执行的任务，只有不能跟当前任务同步执行的任务才会放到异步任务队列，而微任务则是指在当前宏任务完成之后，不能立即执行但又用不着专门为此注册一个异步任务但关联任务，微任务在当前宏任务完成之后，在异步任务执行之前执行。

9。将下面异步代码使用promise改进
```javascript
setTimeout(function () {
    var a = "hello";
    setTimeout(function () {
        var b = "lagou";
        setTimeout(function () {
            var c = "I love you";
        }, 10)
    }, 10)
}, 10)
```
解答：
```javascript
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
```

10.请简述typescript和javascript的关系

解答：typescript是javascript的超集，ts包含js，ts在js基础上增加了严格的类型系统。

11.请谈谈你所认为的typescript的优缺点

解答：
>优点
- 更早暴露错误
- 代码更智能，编码更准确
- 重构更牢靠，
- 减少不必要的类型判断

>缺点：
- 某种程度上降低了写代码的自由度
- 类型注解过多会显得冗余