const minhaPromise = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok');
        }, 2000);
})

async function execultaPromise() {
    const response = await minhaPromise();
    console.log(response);
}

execultaPromise();