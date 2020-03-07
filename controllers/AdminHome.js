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
router.get('/teacher', function(req, res){
	userModel.getAll(function(results){
		if(results.length > 0){
			res.render('AdminHome/teacher', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})
router.get('/student', function(req, res){
	userModel.getAll(function(results){
		if(results.length > 0){
			res.render('AdminHome/student', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})

router.get('/profile1/:id', function(req, res){
	//console.log('profile Page!');
	//res.render('AdminHome/profile1');
	userModel.getById(req.params.id, function(result){
		res.render('AdminHome/profile1', {user: result});
	});
});

//admin:
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
//teacher:
router.get('/edit1/:id', function(req, res){
	
	userModel.getById(req.params.id, function(result){
		res.render('AdminHome/edit1', {user: result});
	});
})

router.post('/edit1/:id', function(req, res){
	
	var user = {
		fullname:req.body.fullname,
		userid: req.body.userid,
		password: req.body.password,
		type: req.body.type,
		id: req.params.id
	};

	userModel.update(user, function(status){
		if(status){
			res.redirect('/AdminHome/teacher');
		}else{
			res.redirect('/AdminHome/edit1/'+req.params.id);
		}
	});
})


//student:
router.get('/edit2/:id', function(req, res){
	
	userModel.getById(req.params.id, function(result){
		res.render('AdminHome/edit2', {user: result});
	});
})

router.post('/edit2/:id', function(req, res){
	
	var user = {
		fullname:req.body.fullname,
		userid: req.body.userid,
		password: req.body.password,
		type: req.body.type,
		id: req.params.id
	};

	userModel.update(user, function(status){
		if(status){
			res.redirect('/AdminHome/student');
		}else{
			res.redirect('/AdminHome/edit2/'+req.params.id);
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
//delete1:
router.get('/delete1/:id', function(req, res){
	
	userModel.getById(req.params.id, function(result){
		res.render('AdminHome/delete1', {user: result});
	});
})

router.post('/delete1/:id', function(req, res){
	
	userModel.delete(req.params.id, function(status){
		if(status){
			res.redirect('/AdminHome/teacher');
		}else{
			res.redirect('/AdminHome/delete1/'+req.params.id);
		}
	});
})
//delete2:
router.get('/delete2/:id', function(req, res){
	
	userModel.getById(req.params.id, function(result){
		res.render('AdminHome/delete2', {user: result});
	});
})

router.post('/delete2/:id', function(req, res){
	
	userModel.delete(req.params.id, function(status){
		if(status){
			res.redirect('/AdminHome/student');
		}else{
			res.redirect('/AdminHome/delete2/'+req.params.id);
		}
	});
})




//Insert:





module.exports = router;

