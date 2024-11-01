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
    context[fn] = this
    const result = context[fn](...argsArr)
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