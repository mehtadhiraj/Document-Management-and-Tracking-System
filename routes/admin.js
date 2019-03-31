let express = require('express');
let router = express.Router();
let Tesseract = require('tesseract.js');
var multer  =   require('multer');
var filename;
var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/uploads');    
    },
    filename: function (req, file, callback) {
        filename = file.fieldname + '-' + Date.now()+'.jpg';
        callback(null, file.fieldname + '-' + Date.now()+'.jpg');
    }
  });

var upload = multer({ storage : storage}).single('userPhoto');

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

router.post('/scan', (req, res, next)=>{
    upload(req,res,function(err) {
        if(err) {
            console.log(err);
            return res.end('fdghjk');
        }else{
            //Get text from images
            Tesseract.recognize('./public/uploads/'+filename, {
                lang: 'eng'
            }).then(result=>{
                res.json({
                    text: result.text.toString('utf8'),
                    path: '/uploads/'+filename
                });
            })
        }
    });
})
module.exports = router;