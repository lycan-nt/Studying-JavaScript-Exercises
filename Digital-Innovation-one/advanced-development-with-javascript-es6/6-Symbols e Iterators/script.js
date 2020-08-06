//Symbols

const uniqueId = Symbol('Hello World!');

const uniqueId2 = Symbol('Hello World!');

console.log(uniqueId === uniqueId2);

const obj = {
    [uniqueId]: 'Hello!'
}
console.log(obj);

//Well known Symbols

Symbol.iterator;

const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


const it2 = arr[Symbol.iterator]();

while (true)
{
    let { value, done } = it2.next();

    if (done)
    {
        break;
    }

    console.log(`${value}`);

}

for (let value of arr)
{
    console.log(`In for: ${value}`);
}
