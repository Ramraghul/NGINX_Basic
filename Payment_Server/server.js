require('./connection')
const express = require('express');
const app = express();
const port = 3001;

app.get('/payment', (req, res) => {
    res.send('User Payment Details Service: Payment data');
});

app.listen(port, () => {
    console.log(`Server 2 (User Payment Details Service) is listening on port ${port}`);
});
