import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Akshar',
        email: 'akshar@purushottam.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Dhruv',
        email: 'dhruv@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Moana',
        email: 'moana@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
];

export default users;