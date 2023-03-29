const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let date = new Date();
  let day = date.getDay();

  if (day == 6 || day == 0) {
    day = 'Weekend';
  } else {
    day = 'Weekday';
  }
  res.render('list', { kindDay: day });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
