/**
 * 手写apply
 * 1.判断调用者是不是函数
 * 2.判断传入的第二个参数是不是数组
 * 3.如果上下文对象是null或者undefined 则把全局的this给到上下文对象
 * 4.使用symbol创建唯一的键标识
 * 5.将this作为全局对象的一个属性
 * 6.把this作为当前上下文对象的一个属性，可以通过context[fn]来调用该函数
 * 7.清除临时属性
 */
Function.prototype.myApply = function (context, argsArr) {
    if (typeof this !== 'function') {
        throw new TypeError("不是函数")
    }
    if (argsArr && !Array.isArray(argsArr)) {
        throw new TypeError("不是数组")
    }
    context = context || globalThis
    argsArr = argsArr || []
    const fn = Symbol('key')
    // console.log('@@this', this)  // 这里的this是者调用myapply的函数
    context[fn] = this
    const result = context[fn](...argsArr)
    console.log('@@context', context)
    delete context[fn]
    return result
}
const test = {
    name: "xxx",
    hello: function () {
        console.log(`hello,${this.name}!`);
    },
    add: function (a, b) {
        return a + b;
    },
};
const obj = { name: "world" };
test.hello.myApply(obj); //hello,world!