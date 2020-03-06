var express 	= require('express');
var router 		= express.Router();
var userModel   = require.main.require('./models/user-model');

router.get('*', function(req, res, next){
	if(req.cookies['userid'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', function(req, res){	
	if(req.cookies['userid'] != null){
		userModel.getByUname(req.cookies['userid'], function(result){
			res.render('AdminHome/index', {user: result});
		});
	}else{
		res.redirect('/logout');
	}
});

router.get('/admin', function(req, res){
	userModel.getAll(function(results){
		if(results.length > 0){
			res.render('AdminHome/admin', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})


router.get('/edit/:id', function(req, res){
	
	userModel.getById(req.params.id, function(result){
		res.render('AdminHome/edit', {user: result});
	});
})

router.post('/edit/:id', function(req, res){
	
	var user = {
		fullname:req.body.fullname,
		userid: req.body.userid,
		password: req.body.password,
		type: req.body.type,
		id: req.params.id
	};

	userModel.update(user, function(status){
		if(status){
			res.redirect('/AdminHome/admin');
		}else{
			res.redirect('/AdminHome/edit/'+req.params.id);
		}
	});
})


//Delete
router.get('/delete/:id', function(req, res){
	
	userModel.getById(req.params.id, function(result){
		res.render('AdminHome/delete', {user: result});
	});
})

router.post('/delete/:id', function(req, res){
	
	userModel.delete(req.params.id, function(status){
		if(status){
			res.redirect('/AdminHome/admin');
		}else{
			res.redirect('/AdminHome/delete/'+req.params.id);
		}
	});
})


//Insert:





module.exports = router;

