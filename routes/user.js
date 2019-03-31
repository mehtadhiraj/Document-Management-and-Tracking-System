let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
    res.render('user/index', { title: 'Express' });
});


router.get('/main', function(req, res, next) {
    res.render('user/mainpage', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
    res.render('user/register', { title: 'Express' });
});

module.exports = router;