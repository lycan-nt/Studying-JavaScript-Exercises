function raid([mim = 0, max = 1000]){

    if (mim > max) [mim, max] = [max, mim]
    const valor = Math.random() * (max - mim) + mim
    return Math.floor(valor)

}

console.log(raid([40,100]))
console.log(raid([, 100]))
console.log(raid([200]))