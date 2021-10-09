const express = require('express');
const axios = require('axios');
require('dotenv').config()

const app = express()
const port= process.env.PORT || 3000;

// app.set('views', './views')
//view engine
 app.set('view engine', 'ejs');

app.listen(port, ()=>{
    console.log(`listening at http://localhost:${port}`)
})
//https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=67833ec7649a4b6fab36f8b90c9d5bf2
app.get('/', (req, res) => {
    res.render('index.ejs',
    { 
        title:"home",
        apiKey: process.env.API_KEY,
        username: process.env.USERNAME
    })
})
app.get('/about', (req, res) => {
   res.render('about.ejs')
})
app.get('/contact', (req, res) => {
    res.render('contact.ejs')
 })
 app.get('/news',(req,res) => {
    axios.get('/user?ID=12345')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
 })