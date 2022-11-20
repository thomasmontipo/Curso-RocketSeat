type User = {
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean; // isAdmin não será obrigatória na sua declaração
}

let newUser: User = {
    name: 'Thomas Henrique',
    email: 'thomas@email.com',
    age: 24
}