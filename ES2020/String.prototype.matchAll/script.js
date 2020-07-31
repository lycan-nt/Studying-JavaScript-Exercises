const str = 'My name is Felipe D. Santos, Is your?';

str.match(/[A-Z] [a-z] +/g);

str.matchAll(/[A-Z] [a-z] +/g);

for (const found of str.matchAll(/[A-Z] [a-z] +/g))
{
    console.log(found);
}

