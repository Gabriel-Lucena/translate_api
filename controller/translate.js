'use strict';

const fs = require('fs');

const express = require('express');
const rawdata = require('../index.json');

const router = express.Router();

const word = JSON.parse(JSON.stringify(rawdata));

const getByValue = (value) => {
  for (let key of Object.keys(word)) if (word[key] === value) return key;
};

router.get('/:portuguese_word', function (req, res) {
  const { portuguese_word } = req.params;

  const lowerCase = portuguese_word.toLowerCase();

  const english_word = getByValue(lowerCase);

  console.log(english_word);
  
  return res.status(200).send(english_word);
});

module.exports = router;
