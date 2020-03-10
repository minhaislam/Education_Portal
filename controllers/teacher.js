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
			console.log('teacher page requested!');
	userModel.getallcourse(function(results){
	
		if(results.length > 0){
			res.render('teacher/index', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
});

router.get('/viewallstudent', function(req, res){
	userModel.getByCid(function(results){
		if(results.length > 0){
			res.render('student/viewallstudent', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})

router.get('/profile', function(req, res){
	if(req.cookies['username'] != null){
console.log(req.cookies['username']);
		userModel.getByTUname(req.cookies['username'], function(result){
			res.render('teacher/profile', {user: result});
		});
	}else{
		res.redirect('/logout');
	}
});
//-------------------edit profile
router.get('/editprofile/:id', function(req, res){
	
	userModel.getById(req.params.id, function(result){
		console.log(result);
	
		res.render('teacher/editprofile', {user: result});
	});
})
router.post('/editprofile/:id', function(req, res){
	
	var user = {
		password : req.body.password,
		email : req.body.email,
		id:req.params.id
	};

	userModel.updateprofile(mark, function(status){
		if(status){
			res.redirect('/student/profile');
		}else{
			res.redirect('/student/editprofile/'+req.params.id);
		}
	});
})


//----------------------------------------------------------//-------------

//change password

router.get('/changepassword/:id', function(req, res){
	
	userModel.getById(req.params.id, function(result){
		console.log(result);
		res.render('teacher/changepassword', {user: result});
	});
})
router.post('/changepassword/:id', function(req, res){
	
	var mark = {
		password: req.body.password,
		id: req.params.id
	};

	userModel.updatep(mark, function(status){
		if(status){
			res.redirect('/student/viewallstudent');
		}else{
			res.redirect('/student/changepassword/'+req.params.id);
		}
	});
})





router.get('/upload', function(req, res){
	userModel.getAll(function(results){
		if(results.length > 0){
			res.render('teacher/upload', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})
router.get('/result', function(req, res){
	userModel.getAll(function(results){
		if(results.length > 0){
			res.render('student/result', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})

module.exports = router;

