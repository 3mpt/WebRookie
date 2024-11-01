// 判断数组
arr = [1,2,3,5,88]
// const res= Array.prototype.isPrototypeOf(arr)
// console.log(res);
const myInstanceOf =(obj,type)=>{
    let proto = Object.getPrototypeOf(obj)
    let prototype= type.prototype
    while(true){
        if(!proto) return false
        if(proto===prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}
// let n1 = 0.1, n2 = 0.2
// console.log(n1 + n2)
// const res= myInstanceOf(arr,Array)
// console.log(res);
// const val = new Boolean(true)
const stu = {
    name: 'Bob',
    age: 24
  }
const {name, age}=stu
console.log(name,age);