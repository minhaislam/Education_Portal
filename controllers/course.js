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
//delete notice
router.get('/deletenotice/:no', function(req, res){
	userModel.getnotice(req.params.no, function(result){
			console.log(result);

		res.render('course/deletenotice', {user: result});
	});
})

router.post('/deletenotice/:no', function(req, res){
	
	userModel.deletenotice(req.params.no, function(status){
		if(status){
			res.redirect('/course/allnotice');
		}else{
			res.redirect('course/deletenotice/:'+req.params.no);
		}
	});
})
router.get('/deletenote/:no', function(req, res){
	userModel.getnote(req.params.no, function(result){
			console.log(result);

		res.render('course/deletenotice', {user: result});
	});
})
router.post('/deletenote/:no', function(req, res){
	
	userModel.deletenote(req.params.no, function(status){
		if(status){
			res.redirect('/course/allnote');
		}else{
			res.redirect('course/deletenote/:'+req.params.no);
		}
	});
})
////dletete end
router.get('/viewallcourse', function(req, res){
	userModel.getallcourse(function(results){
		if(results.length > 0){
			res.render('course/viewallcourse', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})
router.get('/allnotice', function(req, res){
	userModel.getallnotice(function(results){
		if(results.length > 0){
			res.render('course/allnotice', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})
router.get('/allnote', function(req, res){
	userModel.getallnote(function(results){
		if(results.length > 0){
			res.render('course/allnote', {userlist: results});
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

