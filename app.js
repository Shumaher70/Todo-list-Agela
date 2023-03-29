const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

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

  res.render('list', { day: day });
});

app.post('/', (req, res) => {
  let itme = req.body.newItem;

  res.send(item);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
