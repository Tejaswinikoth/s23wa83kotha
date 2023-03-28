var express = require('express');
var router = express.Router();
var x =Math.floor(Math.random()*10);
var fn = Math.random() < 0.33 ? Math.atan2 : Math.random() < 0.67 ? Math.atanh : Math.cbrt;

router.get('/', function(req, res, next) {
    fake_url="https://fake.com/path"+req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    const y = fn(x);
    res.send ( `${fn.name} applied to ${x} is ${y}`);
  });
  module.exports = router;