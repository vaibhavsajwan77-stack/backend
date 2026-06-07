require('dotenv').config()
const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello World!');


});
app.get('/netflix', (req, res) => {
    res.send('welcome to netflix ');
})
app.get('/netflix/login', (req, res) => {
    res.send('login');
})
app.get('/youtube', (req, res) => {
    res.redirect('https://www.youtube.com/');
});
app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`);
});
