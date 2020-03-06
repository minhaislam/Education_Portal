var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/', function(req, res){
	console.log('login page requested!');
	res.render('login/index');
});

router.post('/', function(req, res){
		
		var user ={
			userid: req.body.userid,
			password: req.body.password
		};

		/*userModel.validate(user, function(status){
			if(status){
				if (user.type=='admin') {
					res.cookie('username', req.body.uname);
				res.redirect('/home');
				}
				else if (user.type=='member') {
					res.cookie('username', req.body.uname);
				res.redirect('/home1');
				}
			
				else{
					res.redirect('/login');
				}


			}else{
				res.redirect('/login');
			}
		});*/


		userModel.validate(user, function(result){
				console.log(result);
				if (result[0].type=='admin') {
					res.cookie('userid', req.body.userid);
				res.redirect('/AdminHome');
				}
				else if (result[0].type=='official') {
					res.cookie('userid', req.body.userid);
				res.redirect('/home1');
				}
			
				else{
					res.redirect('/login');
				}


		});
});

module.exports = router;

