var arr = [[1, 2, 2], [3, 4, 5], [6, 7, 8, 9, [11, 12, [12, 13, 14, [15]]]], 10]
const flatArr = (arr) => {
    let res = []
    for(var i =0 ;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res=res.concat(flatArr(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return res
}
const res=flatArr(arr)
// console.log('💩res', res)
console.log('💩res', arr.flat(arr.length))