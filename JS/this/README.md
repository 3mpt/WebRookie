# this 指向

this 指向是面试中老生常谈的问题
其中有三种办法改变 this 指向
核心是将原函数（this）绑定到 context 对象上，并通过 context[fn] 调用它，这样调用时 this 会指向 context

## 1.bind

bind 接受任意个参数，第一个参数是一个对象，Function 的调用者会指向这个对象，如果不传则指向全局 Windows
从第二个参数开始就映射到 Function 的参数上。
bind 不会立即执行可以赋值给一个新的变量执行。

## 2.apply

apply 接受两个参数，第一个参数是一个对象，Function 的调用者会指向这个对象，如果不传指向全局的 Windows
第二个参数是一个数组，它将所有参数收集起来映射到 Function 的参数上。
apply 会立即执行。

## 3.call

bind 接受任意个参数，第一个参数是一个对象，Function 的调用者会指向这个对象，如果不传则指向全局 Windows
从第二个参数开始就映射到 Function 的参数上。
call 会立即执行。
