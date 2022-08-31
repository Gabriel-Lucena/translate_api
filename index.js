const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const translateController = require('./controller/translate');
app.use('/', translateController);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
