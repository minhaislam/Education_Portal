var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');
const { check, validationResult } = require('express-validator');

router.get('/insert1',[check('fullname', 'Full Name is required').isEmpty(),
	check('userid', 'UserID is required').isEmpty(),
  check('password', 'Pssword is required').isEmpty().isLength({min: 5}),
  check('type', 'Type is required').isEmpty()]
  , function(req, res){
	var errors = validationResult(req);
	console.log('Insert Page!');
	res.render('AdminHome/insert1',{error:errors.mapped()});
});

router.post('/insert1',[check('fullname', 'Full Name is required').not().isEmpty(),
	check('userid', 'UserID is required').not().isEmpty(),
  check('password', 'Pssword is required').not().isEmpty().isLength({min : 5}),
  check('type', 'Type is required').not().isEmpty()]
  , function(req, res){
		
		var user ={
			fullname: req.body.fullname,
			userid: req.body.userid,
			password: req.body.password,
			type: req.body.type
		};
		//console.log(user.fullname);

		var errors = validationResult(req);
		if (!errors.isEmpty()) {
				console.log(errors.mapped());
    	res.render('AdminHome/insert1', {error:errors.mapped()});
					
			}
			else{
				userModel.insert(user, function(status){
			if(status){
				console.log('successful');
				res.redirect('/AdminHome/teacher');
			}else{
				console.log('not successful');
				res.redirect('/AdminHome/teacher');
			}
		});
					
			}
})

module.exports = router;

