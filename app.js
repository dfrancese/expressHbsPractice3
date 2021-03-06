const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'hbs') // to use hbs
app.use(express.static('public')) // to look at public folder

app.get('/', (req,res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log('listening on port ', port);
})
