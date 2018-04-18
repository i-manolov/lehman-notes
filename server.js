const express = require('express')
const hbs = require('express-handlebars')

const app = express()

app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'main' }))
app.set('views', './views')
app.set('view engine', 'hbs')

app.get('/', function(req, res) {
  res.render('home')
})

const port = process.env.PORT || 3000
app.listen(port, function() {
  console.log(`App is running on port: ${port}`)
})
