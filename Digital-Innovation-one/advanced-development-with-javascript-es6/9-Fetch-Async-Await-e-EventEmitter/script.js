//Fetch
// fetch('/data.json')
//     .then((response) => {

//         if (response.status === 200)
//         {
//             return response.json()
//         } 
//         else 
//         {
//             throw new Error('Request error');
//         }
            
//     })
//     .then((data) => console.log(data))
//     .catch((error) => console.log(`An error has occured: ${error}`))

//======================================================================

//ES7 Async / Await
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(123456);
    }, 2000);
});

const simpleFunction = async () => {
    //throw new Error('Oh no!');
    const data = await asyncTimer();
    return data;
}

simpleFunction()
    .then((response) => console.log(response))
    .catch((error) => console.log(`Ops! ${error}`))

console.log("Continue...");