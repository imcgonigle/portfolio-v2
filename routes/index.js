var express = require('express');
var router = express.Router();

var siteInfo = {
  name: 'Portfolio'
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', siteInfo);
});

router.get('/portfolio', function(req, res, next){
  res.render('portfolio', siteInfo);
});

module.exports = router;
