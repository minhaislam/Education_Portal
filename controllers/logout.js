var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

	//req.session.username = null;
	res.clearCookie('userid');
	res.redirect('/logina');
});

module.exports = router;

