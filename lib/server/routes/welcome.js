var express = require('express');
var router = express.Router();

router.get('/hello', function(req, res) {
  console.log("welcome");
  res.send("Welcome to the spaceship factory!");
});

module.exports = router;
