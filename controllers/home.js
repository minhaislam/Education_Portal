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
			res.render('home/index', {user: result});
		});
	}else{
		res.redirect('/logout');
	}
});

router.get('/alluser', function(req, res){
	userModel.getAll(function(results){
		if(results.length > 0){
			res.render('home/alluser', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})


router.get('/edit/:id', function(req, res){
	
	userModel.getById(req.params.id, function(result){
		res.render('home/edit', {user: result});
	});
})

router.post('/edit/:id', function(req, res){
	
	var user = {
		FullName:req.body.FullName,
		username: req.body.username,
		password: req.body.password,
		type: req.body.type,
		id: req.params.id
	};

	userModel.update(user, function(status){
		if(status){
			res.redirect('/home/alluser');
		}else{
			res.redirect('/home/edit/'+req.params.id);
		}
	});
})
//Edit Profile:

router.get('/profile/:id', function(req, res){
	
	userModel.getById(req.params.id, function(result){
		res.render('home/profile', {user: result});
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
			res.redirect('/home/profile/'+req.params.id);
		}
	});
})

//Delete
router.get('/delete/:id', function(req, res){
	
	userModel.getById(req.params.id, function(result){
		res.render('home/delete', {user: result});
	});
})

router.post('/delete/:id', function(req, res){
	
	userModel.delete(req.params.id, function(status){
		if(status){
			res.redirect('/home/alluser');
		}else{
			res.redirect('/home/delete/'+req.params.id);
		}
	});
})
router.post('/', function(req, res){
		
		var user ={
			FullName: req.body.FullName,
			username: req.body.uname,
			password: req.body.password,
			type: req.body.type
		};

		userModel.insert(user, function(status){
			if(status){
				res.redirect('/home/alluser');
			}else{
				res.redirect('/home/alluser');
			}
		});
})



module.exports = router;

