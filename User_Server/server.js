require('./connection');
const express = require('express');
const app = express();
const port = 3000;

app.get('/user', (req, res) => {
    res.send('User Service: User data');
});

app.listen(port, () => {
    console.log(`Server 1 (User Service) is listening on port ${port}`);
});
