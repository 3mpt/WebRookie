const arr = [{ a: 1, b: 2 }, { a: 1, b: 2 }, { A: 2 }, 1, 2, 1]
// let res = [...new Set(arr)]
function removeObj(arr) {
    let arrSet = new Set()
    return arr.filter(element => {
        element = JSON.stringify(element)
        return arrSet.has(element) ? false : arrSet.add(element)
    });
}
let res = removeObj(arr)
console.log('💩res', res)
console.log('💩res', typeof NaN)