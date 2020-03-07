var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/insert2', function(req, res){
	console.log('Insert Page!');
	res.render('AdminHome/insert2');
});

router.post('/insert2', function(req, res){
		
		var user ={
			fullname: req.body.fullname,
			userid: req.body.userid,
			password: req.body.password,
			type: req.body.type
		};
		console.log(user.fullname);

		userModel.insert(user, function(status){
			if(status){
				console.log('successful');
				res.redirect('/AdminHome/student');
			}else{
				console.log('not successful');
				res.redirect('/AdminHome/student');
			}
		});
})

module.exports = router;

