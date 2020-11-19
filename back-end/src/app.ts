import express = require('express');

const app:  express.Application = express();
const PORT: number = 9000;

app.get('/:id', (req, res):void => {
    res.send('Fetching ID in MaL');
});

app.listen(PORT, ():void => {
    console.log(`App is listening on port ${PORT}!`);
});