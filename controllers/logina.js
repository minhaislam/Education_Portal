var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');
const { check, validationResult } = require('express-validator');


router.get('/', [check('userid', 'UserID is required').isEmpty(),
  check('password', 'Pssword is required').isEmpty()] ,
  function(req, res){
  	var errors = validationResult(req);
	console.log('login page requested!');
	res.render('logina/index',{error:errors.mapped()});
});

router.post('/',[
  check('userid', 'UserID is required').not().isEmpty(),
  check('password', 'Password is required').not().isEmpty()  ] ,
   function(req, res){
		
		var user ={
			userid: req.body.userid,
			password: req.body.password
		};


var errors = validationResult(req);

		if (!errors.isEmpty()) {
			console.log(errors.mapped());
    	res.render('logina/index', {error:errors.mapped()});	
		}
		else{
			userModel.validate(user, function(result){
				console.log(result);
				if (result[0].type=='admin') {
					res.cookie('userid', req.body.userid);
				res.redirect('/AdminHome');
				}
				else if (result[0].type=='teacher') {
					res.cookie('userid', req.body.userid);
				res.redirect('/teacher');
				}
			
				else{
					res.redirect('/logina');
				}


		});
		}
});

module.exports = router;

