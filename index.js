require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const translateController = require('./controller/translate');
app.use('/', translateController);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
