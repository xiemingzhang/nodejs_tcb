var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('order', { title: 'Express' });
});

router.post('/sub',function(req,res,next){
	var data = req.body.fee
	var n = 0;
	res.json({'code':n,num:data});
}) 

module.exports = router;
