const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

let items = ['Boy food', 'Cook food', 'Eat food'];

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let today = new Date();

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };

  let day = today.toLocaleDateString('en-US', options);

  res.render('list', { day: day, items: items });
});

app.post('/', (req, res) => {
  let item = req.body.newItem;
  items.push(item);
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
