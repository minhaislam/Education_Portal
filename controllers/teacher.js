var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');
const { check, validationResult } = require('express-validator');
var multer = require('multer');

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/');
	},
	filename: (req, file, cb) => {
		cb(null, Date.now()+'-'+file.originalname);
	}
});
var upload = multer({ storage });




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

//all notice view
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
//status

router.get('/routine', function(req, res){
	userModel.getallstudent(function(results){
		if(results.length > 0){
			console.log(results);
			console.log(results);
			res.render('teacher/routine', { userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})
//-------------------edit profile


router.get('/editprofile/',function(req, res){
		var errors = validationResult(req);
	userModel.getByTUname(req.cookies['username'], function(result){
		res.render('teacher/editprofile', {user: result});
	});
})
router.post('/editprofile',[check('name', 'Name is required').isEmpty(),
	check('username', 'Username is required').isEmpty(),
  check('password', 'Pssword is required').isEmpty().isLength({min: 5}),
  check('email', 'Email is required').isEmpty(),
  check('type', 'Type is required').isEmpty()]
 ,function(req, res){
	
	var user = {
		name :req.body.name,
		password : req.body.password,
		email : req.body.email,
		type :req.body.type,
		id:req.body.id
	};
	userModel.updateprofile(user, function(status){
		if(status){
			res.redirect('/teacher/profile');
		}else{
			res.redirect('/teacher/editprofile/');
		}
	});
})
//pass-word change

router.get('/changepassword', function(req, res){
	
	userModel.getByTUname(req.cookies['username'], function(result){
	
		res.render('teacher/changepassword', {user: result});
	});
})
router.post('/changepassword', function(req, res){
	
	var user = {
		password: req.body.password,
		cpassword: req.body.cpassword,
		uname: req.cookies['username']
	};
console.log(user);

if (user.password==user.cpassword) {
	userModel.updatepassword(user, function(status){
		if(status){
			res.redirect('/teacher/profile');
		}else{
			res.redirect('/teacher/changepassword');
		}
	});
}
else{
	res.redirect('/teacher/changepassword');
}
	
})
// change status
router.get('/changestatus', function(req, res){
	
	userModel.getByTUname(req.cookies['username'], function(result){
	
		res.render('teacher/changestatus', {user: result});
	});
})
router.post('/changestatus', function(req, res){
	
	var user = {
		password: req.body.password,
		uname: req.cookies['username']
	};
console.log(user);
	userModel.updatestatus(user, function(status){
		if(status){
			res.redirect('/teacher/profile');
		}else{
			res.redirect('/teacher/changepassword');
		}
	});
})

router.get('/upload/:cid', function(req, res){
	
	userModel.getByCid(req.params.cid, function(result){
  console.log(result);
		res.render('teacher/upload', {user: result});
	})
	
})
router.post('/upload/:cid', function(req, res){
	
	var user = {
		notice: req.body.notice,
		cid: req.params.cid
	};
	console.log(user);
	userModel.insertnotice(user, function(status){
		if(status){
			res.redirect('../../course/allnotice');
		}else{
			res.redirect('/teacher/upload/'+ req.params.cid);
		}
	});
})
router.get('/uploadnote/:cid', function(req, res){
	var rid=req.params.cid; 
	userModel.getByCid(req.params.cid, function(result){
  console.log(result);
		res.render('teacher/uploadnote', {user: result});
	})
	
})
router.post('/uploadnote/:cid',upload.single('img') ,function(req, res){
	var filename1= req.file.filename;
	var user = {
		filename: filename1,
		cid: req.params.cid
	};
	console.log(user);
	userModel.insertnote(user, function(status){
		if(status){
			res.redirect('../../course/allnote');
		}else{
			res.redirect('/teacher/uploadnote/'+ req.params.cid);
		}
	});
})
module.exports = router;