var express = require('express');
var router = express.Router();
var fs = require('fs');

function getData(path){
	var content = fs.readFileSync(path,{'encoding':'utf-8'});
	return content;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('repair', { title: 'Express' });
});
router.get('/shoplist',function(req,res,next) {
	var data = getData('data/2.json');
	res.json(data)
})


module.exports = router;

