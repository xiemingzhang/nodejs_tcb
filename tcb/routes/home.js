var express = require('express');
var router = express.Router();
var fs = require('fs');

function getData(path){
	var content = fs.readFileSync(path,{'encoding':'utf-8'});
	return content;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/shoplist/:id',function(req,res,next) {
	var id = req.params.id;
	var data = getData('data/'+id+'.json');
	res.json(data)
})

module.exports = router;
