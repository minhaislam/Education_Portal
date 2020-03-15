var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');
const { check, validationResult } = require('express-validator');


router.get('/', [check('uname', 'uname is required').isEmpty(),
  check('password', 'Pssword is required').isEmpty()] ,
  function(req, res){
  	var errors = validationResult(req);
	console.log('login page requested!');
	res.render('login/index',{error:errors.mapped()});
});


router.post('/',[
  check('uname', 'uname is required').not().isEmpty(),
  check('password', 'Password is required').not().isEmpty()  ] ,
   function(req, res){
			
		var user ={
			username: req.body.uname,
			password: req.body.password
		};
		var today = new Date();
	var sysDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var sysTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

 /*if(req.body.uname == ""){
		res.send("Usernameame con not be empty!");
	}
	if(req.body.uname.length >7){
		res.send("Username can not be more than 6 character long.");
	}*/
var errors = validationResult(req);

		if (!errors.isEmpty()) {
			console.log(errors.mapped());
    	res.render('login/index', {error:errors.mapped()});	
		}
		else{		

		userModel.validate(user, function(status){
			if(status){
				res.cookie('username', req.body.uname);
			res.cookie('password', req.body.password);
			res.cookie('date', sysDate);
			res.cookie('time', sysTime);
			console.log(req.cookies['time']);
				res.redirect('/teacher');
			}else{
				res.redirect('/login');
			}
		});
	}
});

module.exports = router;