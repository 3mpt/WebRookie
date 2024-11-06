/**
 *
 * 手写call函数
 * 1.先判断调用者是不是一个函数，如果不是抛出错误
 * 2.如果传入的上下文是空，则把globalthis绑定到context上
 * 3.使用symbol创建唯一的键，避免冲突
 * 4.把this作为当前上下文对象的一个属性，可以通过context[fn]来调用该函数
 * 5.清理临时属性
 */
Function.prototype.myCall = function (context, ...args) {
    if (typeof this !== "function") {
        throw new Error('错误')
    }
    context = context || globalThis
    const fn = Symbol("key")
    context[fn] = this
    const result = context[fn](...args)
    delete context[fn]
    return result
}
const test = {
    name: "liming",
    hello: function () {
        console.log(`hello,${this.name}!`);
    },
    add: function (a, b) {
        return a + b;
    },
};
const obj = { name: "world" };
test.hello.myCall(obj); //hello,world!
test.hello.call(obj);//hello,world!
console.log(test.add.myCall(null, 1, 2));//3
console.log(test.add.call(null, 1, 2));//3
console.log(test.add(1, 2));//3

