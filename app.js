const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const date = require(__dirname + '/date');

const app = express();

let items = ['Boy food', 'Cook food', 'Eat food'];
let workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

  const day = date.getDay()

  res.render('list', { listTitle: day, items: items });
});

app.post('/', (req, res) => {
  let item = req.body.newItem;
  
  if(req.body.list === 'Work'){
    workItems.push(item)
    res.redirect('/work')
  }else {
    items.push(item);
    res.redirect('/');
  }

});

app.get('/work', (req, res) => {
  res.render('list', { listTitle: 'Work List', items: workItems });
});

app.post('/work', (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect('/work');
});

app.get('/about',(req,res)=>{
  res.render('about');
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
