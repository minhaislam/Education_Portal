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
router.post('/', function(req, res){
	var search = req.body.search;
	var username = req.cookies['username'];
	if(search == ""){
		res.redirect('student/viewallstudent');
	}
	else{
				userModel.getSearchByID(search, email, function(results){
				var result = {
					name: "Welcome"
				}
				res.render('student/viewallstudent',{book: results, user: result});
			});
		}
		
	
});



router.get('/allresult', function(req, res){
	userModel.getallresult(function(results){
					console.log(results);

		if(results.length > 0){
			console.log(results);
			console.log(results);
			res.render('student/allresult', { userlist: results});
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
		console.log(req.params.id);
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

router.get('/contact/:id', function(req, res){
	
	userModel.getBySid(req.params.id, function(result){
		console.log(req.params.id);
		res.render('student/contact', {user: result});
	});
})
router.post('/contact/:id', function(req, res){
	
	var user = {
		ntitle: req.body.ntitle,
		notice: req.body.notice,
		id: req.body.id
	};
console.log(user);
	userModel.updatenotice(user, function(status){
		if(status){
			res.redirect('/student');
		}else{
			res.redirect('/student/contact/'+id);
		}
	});
})
module.exports = router;

