var db = require('./db');

module.exports ={
	getById: function(id, callback){
		var sql = "select * from users where id=?";
		db.getResult(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getByUname: function(userid, callback){
		var sql = "select * from users where userid=?";
		db.getResult(sql, [userid], function(result){
			console.log(result)
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getByUid: function(userid, callback){
		var sql = "select * from adminprofile where userid=?";
		db.getResult(sql, [userid], function(result){
			console.log(result)
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	validate: function(user, callback){
		var sql = "select * from users where userid=? and password=?";
		db.getResult(sql, [user.userid, user.password], function(result){
			if(result.length > 0){
				//console.log(result);
				callback(result);
			}else{
				//callback(false);
			}
		});
	},
	getAll:function(callback){
		var sql = "select * from users";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	insert: function(user, callback){
		var sql = "insert into users values(?,?,?,?,?)";

		db.execute(sql, [null,user.fullname,user.userid, user.password, user.type], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	insertadmin: function(user, callback){
		console.log(user);
		var sql = "insert into users values(?,?,?,?,?)";

		db.execute(sql, [null,user.fullname,user.userid, user.password, user.type], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(id, callback){
		var sql = "delete from users where id=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update: function(user, callback){
		var sql = "update users set fullname=?,userid=?, password=?, type=? where id=?";
		db.execute(sql, [user.fullname,user.userid, user.password, user.type, user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	searchbyuserid: function(userid, callback){
		var sql = "select userid from users where userid like '%{userid}%' ";
		db.getResult(sql, [userid], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getcount:function(callback){
		var sql = "select count(type) from users";
		db.getResult(sql, null, function(results){
			console.log(results);
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	}
	
	
}