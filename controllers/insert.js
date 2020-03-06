var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/insert', function(req, res){
	console.log('Insert Page!');
	res.render('AdminHome/insert');
});

router.post('/insert', function(req, res){
		
		var user ={
			fullname: req.body.fullname,
			userid: req.body.userid,
			password: req.body.password,
			type: req.body.type
		};
		console.log(user.fullname);

		userModel.insert(user, function(status){
			if(status){
				console.log('successful');
				res.redirect('/AdminHome/admin');
			}else{
				console.log('not successful');
				res.redirect('/AdminHome/admin');
			}
		});
})

module.exports = router;

