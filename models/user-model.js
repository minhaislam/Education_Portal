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
	getByAId: function(userid, callback){
		var sql = "select * from teacherprofile where userid=?";
		db.getResult(sql, [userid], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getBySId: function(userid, callback){
		var sql = "select * from studentprofile where userid=?";
		db.getResult(sql, [userid], function(result){
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
	changepass: function(user, callback){
		var sql = "update users set password=? where id=?";
		db.execute(sql, [user.password,user.id], function(status){
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
	validatee: function(user, callback){
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
	}
}