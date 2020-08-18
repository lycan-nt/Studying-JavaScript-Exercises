const fs = require('fs');
const { join } = require('path');

const filePath = join(__dirname, 'users.json');

const getUsers = () => {
    const data = fs.existsSync(filePath) ? fs.readFileSync(filePath) : [];

    try
    {
        return JSON.parse(data);
    }
    catch (error)
    {
        [];
    }
}

const saveUser = (users) => {
    fs.writeFileSync(filePath, JSON.parse(users, null, '\t'));
}

const usersRoute = (app) => {
    app.route('/users/:id?')
        .get((req, res) => {
            const users = getUsers();

            res.send({ users });
        })
}

module.exports = usersRoute;