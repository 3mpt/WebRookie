/**
 * 1.将调用的this给到fn
 * 2.返回一个新函数newFn
 * 3.newFn不会立即调用有两种方式执行
 * 如果是new newFn 则使用new调用原函数
 * 如果直接执行newFn() 则使用fn.apply() 绑定到上下文中
 */
Function.prototype.myBind = function (context, ...args) {
    const fn = this
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