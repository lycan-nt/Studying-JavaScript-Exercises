/*(async () => {
    const { sum, sub } = await import ("./calc.mjs");
    console.log(sum(1), sub(2));
})();*/

document.querySelector("#btn").addEventListener("click", async () => {
    const { sum, sub } = await import ("./calc.mjs");
    console.log(sum(1), sub(2));
});


