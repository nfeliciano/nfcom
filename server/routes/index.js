var express = require('express');
var router = express.Router();
var pg = require('pg');
var path = require('path');
var connection = require(path.join(__dirname, '../', '../', 'config'));

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, '../', '../', 'client', 'views', 'index.html'));
});

module.exports = router;

router.post('/api/v1/nfcom', function(req, res) {

});

router.get('/api/v1/nfcom', function(req, res) {

});

router.put('/api/v1/nfcom/:item_id', function(req, res) {

});

router.delete('/api/v1/nfcom/:item_id', function(req, res) {

});
