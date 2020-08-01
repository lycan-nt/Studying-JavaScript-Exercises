Promise.all([
    new Promise(resolve => setTimeout( resolve, 2000)),
    new Promise(resolve => setTimeout( resolve, 1500)),
    new Promise(resolve => setTimeout( resolve, 1000)),
])
    .then(result => {
        console.log(result);
    })

Promise.race([
    new Promise(resolve => setTimeout(resolve, 2000)),
    new Promise(resolve => setTimeout(resolve, 1500)),
    new Promise(resolve => setTimeout(resolve, 1000)),
])
    .then(result => {
        console.log(result);
    })

Promise.allSettled([
    new Promise((resolve, reject) => setTimeout(reject, 2000)),
    new Promise(resolve => setTimeout(resolve, 1500)),
    new Promise(resolve => setTimeout(resolve, 1000)),
])
    .then(result => {
        console.log(result);
    })
    .catch(error => console.log(error));