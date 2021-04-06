var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res) {
    res.send('Hello World!');
});


router.get('/user', function(req, res) {
    res.send('Hello User!');
});

router.get('/user/:id', function(req, res) {
    res.send(`Hello User! Your ID: ${req.params.id}`);
});

module.exports = router;
