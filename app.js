const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// app.use(express.static('static'))

app.get('/*', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, './static', req.url), (err) => {
        if(err) {
            console.log(err);
            res.statusCode = 404;
            res.sendFile(path.join(__dirname, './static/404.html'));
        }
    });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})