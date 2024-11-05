const myPromiseAll = (promiseIterator) => {
    // 定义成功和失败变量
    let res, rej
    const p = new Promise((resolve, reject) => {
        res = resolve
        rej = reject
    })
    let count =0
    let fullCount =0
    let result =[]
    for(let iterator of promiseIterator){
        let i =count
        count ++
        Promise.resolve(iterator).then((res)=>{
            result[i]=res
            fullCount++
            if(count==fullCount){
                res(result)
            }
            
        },error=>
            rej(error)
        )
      

    }
    if(!count){
        return result
    }
    return p
}
const promise1 = Promise.resolve(1);
const promise2 = Promise.reject(2);
const promise3 = Promise.resolve(3);

myPromiseAll([promise1, promise2, promise3])
    .then((results) => {
        console.log(results); // 输出: [1, 2, 3]
    })
    .catch((error) => {
        console.error('error', error);
    });
