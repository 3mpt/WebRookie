Function.prototype.myBind = function (context, ...args) {
    const fn = this
    context = context || []
    return function newFn(...newFnArgs) {
        if (this instanceof newFn) {
            return new fn(...args, ...newFnArgs)
        }
        return fn.apply(context, [...args, ...newFnArgs])
    }

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
const bindBind = test.hello.myBind(obj); //hello,world!
bindBind()