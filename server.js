const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const app = express();

require('dotenv').config({});

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

 

// Dont forget to change back to 80 also proxy to 80
app.listen(process.env.PORT || 80);

console.log("works!!");