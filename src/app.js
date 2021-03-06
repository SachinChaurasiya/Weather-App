const express = require('express')
const app = express()
const path = require('path');
const hbs = require('hbs')
const port = process.env.PORT || 3000

// public static path

const static_path = (path.join(__dirname, '../public'));
const tamplate_path = (path.join(__dirname, '../tamplate/views'));
const particals_path = (path.join(__dirname, '../tamplate/partials'));

// hbs 
app.set('view engine', 'hbs');
app.set('views', tamplate_path);
hbs.registerPartials(particals_path);
app.use(express.static(static_path));


// Routing 
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/weather', (req, res) => {
    res.render('weather')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/*', (req, res) => {
    res.render('404error')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})