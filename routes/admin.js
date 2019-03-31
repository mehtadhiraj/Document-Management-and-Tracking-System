let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
    res.render('admin/index', { title: 'Express' });
});

router.post('/login', function(req, res, next){
    console.log(req.body);
    res.redirect('/admin');
})

router.get('/operations', function(req, res, next){
    res.render('admin/operations');
})
module.exports = router;