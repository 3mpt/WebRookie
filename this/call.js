Function.prototype.myCall = function (context, ...args) {
    if (typeof this !== "function") {
        throw new Error('错误')
    }
    console.log('💩this', this)
    context = context || globalThis
    const fn = Symbol("key")
    context[fn] = this
    console.log('💩context', context)
    const result = context[fn](...args)
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
test.hello.myCall(obj); //hello,world!
// test.hello.call(obj);//hello,world!
// console.log(test.add.myCall(null, 1, 2));//3
// console.log(test.add.call(null, 1, 2));//3

