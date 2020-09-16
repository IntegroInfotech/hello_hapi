const express = require('express');
const app = express();
app.get('/', async (req, res) => {
    res.status(200).json({status: true});
});
app.listen(3001, '0.0.0.0', () => {
    console.log('App listening on port 3001!');
});
