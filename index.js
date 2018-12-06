const express = require('express');
const path = require('path');
const _data = require('./data/reviews.js');
const data = require('./data/reviews.json');
const fs = require('fs')


const app = express();


app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/api/getList', (req, res) => {
    var list = JSON.stringify(data);
    res.json(data);
    console.log('Sent list of items');
});


app.post('/api/list/update', (req, res) => {
    console.log(req.body);
    res.json(list);
    console.log('Sent list of items');
});

app.post('/api/list/add', (req, res) => {
    var list = JSON.stringify(data);

    fs.writeFileSync('./data/reviews.json', list);
    fs.writeFileSync('./data/reviews.json', res.json(req.body));

    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);