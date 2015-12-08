var express = require('express');

var data = require('./data.js');
var app  = express();

var instructors = [
  {given-name: "Cho", surname: "Kim", sex: male},
  {given-name: "Liz", surname: "Howard", sex: female},
  {given-name: "Rosa", surname: "Choi", sex: female},
  {given-name: "Zubair", surname: "Desai", sex: male},
  {given-name: "Tyler", surname: "Bettilyon", sex: male}
];

express.get('/', function(req, res) {
  // write code.
});

express.listen(8000, function() {
	console.log("I'm listening on port 8000...");
});
