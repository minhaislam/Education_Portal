var db = require('./db');

module.exports ={
	getById: function(id, callback){
		var sql = "select * from admin where id=?";
		db.getResult(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getByUname: function(userid, callback){
		var sql = "select * from admin where userid=?";
		db.getResult(sql, [userid], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	validate: function(user, callback){
		var sql = "select * from admin where userid=? and password=?";
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
		var sql = "select * from admin";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	insert: function(user, callback){
		var sql = "insert into admin values(?,?,?,?,?)";

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
		var sql = "insert into admin values(?,?,?,?,?)";

		db.execute(sql, [null,user.fullname,user.userid, user.password, user.type], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(id, callback){
		var sql = "delete from admin where id=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update: function(user, callback){
		var sql = "update admin set fullname=?,userid=?, password=?, type=? where id=?";
		db.execute(sql, [user.fullname,user.userid, user.password, user.type, user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}