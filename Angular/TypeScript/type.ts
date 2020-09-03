export interface User {
    name: string;
    age: number;
    active?: boolean;
}

let user: User = {
    name: 'Felipe',
    age: 25,
    active: true
}