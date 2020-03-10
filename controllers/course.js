var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');
router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', function(req, res){
		console.log('course page requested!');
	userModel.getallcourse(function(results){
		if(results.length > 0){
					console.log(results);

			res.render('course/index', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
});

router.get('/viewallcourse', function(req, res){
	userModel.getallcourse(function(results){
		if(results.length > 0){
			res.render('course/viewallcourse', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})


router.post('/', function(req, res){
		
		var user ={
			username: req.body.uname,
			password: req.body.password
		};

		userModel.validate(user, function(status){
			if(status){
				res.cookie('username', req.body.uname);
				res.redirect('/home');
			}else{
				res.redirect('/login');
			}
		});
});

module.exports = router;

