const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('Promise 2 rejected'));
    }, 2000);
});

const myRace = (raceIterator) => {
    let res, rej
    const p = new Promise((resolve, reject) => {
        res = resolve
        rej = reject
    })
    for (let iterator of raceIterator) {
        Promise.resolve(iterator).then((result) => {
            res(result)
        }, err => {
            rej(err)
        })
    }
    return p
}
myRace([promise1, promise2]).then((results) => {
    console.log(results); // 输出: [1, 2, 3]
})
    .catch((error) => {
        console.error('error', error);
    });