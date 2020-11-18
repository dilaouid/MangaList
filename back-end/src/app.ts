import express = require('express');

const app:  express.Application = express();
const PORT: number = 9000;

app.get('/:id', function (req, res) {
    res.send('Fetching ID in MaL');
});

app.listen(PORT, function () {
    console.log(`App is listening on port ${PORT}!`);
});