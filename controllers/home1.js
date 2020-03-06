var express 	= require('express');
var router 		= express.Router();
var userModel   = require.main.require('./models/user-model');

router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', function(req, res){	
	if(req.cookies['username'] != null){
		userModel.getByUname(req.cookies['username'], function(result){
			res.render('home1/index', {user: result});
		});
	}else{
		res.redirect('/logout');
	}
});


//Edit Profile:

router.get('/profile/:id', function(req, res){
	
	userModel.getById(req.params.id, function(result){
		res.render('home1/profile', {user: result});
	});
})

router.post('/profile/:id', function(req, res){
	
	var user = {
		FullName:req.body.FullName,
		username: req.body.username,
		password: req.body.password,
		type: req.body.type,
		id: req.params.id
	};

	userModel.update(user, function(status){
		if(status){
			res.redirect('/logout');
		}else{
			res.redirect('/home1/profile/'+req.params.id);
		}
	});
})

module.exports = router;

