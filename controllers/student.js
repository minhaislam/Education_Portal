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
	console.log('student page requested!');
	userModel.getallstudent(function(results){
		if(results.length > 0){
			console.log(results);
			res.render('student/index', { userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})

router.get('/viewallstudent', function(req, res){
	userModel.getallstudent(function(results){
		if(results.length > 0){
			console.log(results);
			console.log(results);
			res.render('student/viewallstudent', { userlist: results});
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
//-------give mark-----
router.get('/givemark/:id', function(req, res){
	
	userModel.getBySid(req.params.id, function(result){
		res.render('student/givemark', {user: result});
	});
})
router.post('/givemark/:id', function(req, res){
	
	var mark = {
		result: req.body.result,
		id: req.params.id
	};

	userModel.update(mark, function(status){
		if(status){
			res.redirect('/student/viewallstudent');
		}else{
			res.redirect('/student/givemark/'+id);
		}
	});
})


module.exports = router;

