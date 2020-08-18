const express = require('express');

const userRoute = require('./routes/userRoute');

const app = express();

const port = 3000;

userRoute(app);

app.get('/', (req, res) => {
    res.send('Hello World!');
});




app.listen(port, () => console.log('Server Start!'));