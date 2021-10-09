const express = require('express');
require('dotenv').config()
console.log(process.env)


const app = express()
const port= process.env.PORT || 3000;

// app.set('views', './views')
//view engine
 app.set('view engine', 'ejs');


app.listen(port, ()=>{
    console.log(`listening at http://localhost:${port}`)
})

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