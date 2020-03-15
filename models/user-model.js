var db = require('./db');

module.exports ={
	getById: function(id, callback){
		var sql = "select * from user";
		db.getResult(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getallupload: function(id, callback){
		var sql = "select * from upload";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	getupload: function(cid, callback){
		var sql = "select * from student where cid=?";
		db.getResult(sql, [cid], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getallresult: function(id, callback){
		var sql = "select * from result";
		db.getResult(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getBySid: function(id, callback){
		var sql = "select * from student where id=?";
		db.getResult(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getByCid: function(cid, callback){
		var sql = "select * from course where cid=?";
		db.getResult(sql, [cid], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getBySemail: function(email, callback){
		var sql = "select * from student where email=?";
		db.getResult(sql, [email], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
    
    
	getByTUname: function(uname, callback){
		var sql = "select * from user where username=?";
		db.getResult(sql, [uname], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	//for login
	validate: function(user, callback){
		var sql = "select * from user where username=? and password=?";
		db.getResult(sql, [user.username, user.password], function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	//course all information
	getallcourse:function(callback){
		var sql = "select * from course";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	getallnotice:function(callback){
		var sql = "select * from upload";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	getallnote:function(callback){
		var sql = "select * from uploadenote";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	//get= single notice.....
	getnotice: function(no, callback){
		var sql = "select * from upload where no=?";
		db.getResult(sql, [no], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getnote: function(no, callback){
		var sql = "select * from uploadenote where no=?";
		db.getResult(sql, [no], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},//order by id desc
    getallstudent:function(callback){
		var sql = "select * from student";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
    
	getAll:function(callback){
		var sql = "select * from user";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	updateprofile: function(user, callback){
		var sql = "update user set name=?,password=?,email=?,type=? where id=?";
		db.execute(sql, [user.name,user.password,user.email,user.type,user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	updatestatus: function(user, callback){
		var sql = "update user set status=? where username=?";
		db.execute(sql, [user.password,user.uname], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	updatepassword: function(user, callback){
		var sql = "update user set password=? where username=?";
		db.execute(sql, [user.password,user.uname], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	deletenotice: function(id, callback){
		var sql = "delete from upload where id=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
    //insert alll
    insertnotice: function(user, callback){
		var sql = "insert into upload values(?,?,?)";

		db.execute(sql, [null,user.cid,user.notice], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	insertnote: function(user, callback){
		var sql = "insert into uploadenote values(?,?,?)";

		db.execute(sql, [null,user.cid,user.filename], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
    deletenotice: function(no, callback){
		var sql = "delete from upload where no=?";
		db.execute(sql, [no], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	deletenote: function(no, callback){
		var sql = "delete from uploadenote where no=?";
		db.execute(sql, [no], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	updatenotice: function(user, callback){
		var sql = "update student set ntitle=?,notice=? where id=?";
		db.execute(sql, [user.ntitle,user.notice,user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update: function(user, callback){
		var sql = "update student set  result=? where id=?";
		db.execute(sql, [user.result, user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getSearchByID : function(search, id, callback){
		var sql = "select * from book where (name=? or email=? or cid=?) and id!=?";
		db.getResults(sql, [search, search, search, email], function(results){
			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
}