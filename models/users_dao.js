function UsersDAO(connection){
	this._connection = connection;
}

//POSTS
UsersDAO.prototype.InsertUser = function([user_name, user_login, user_password], callback){
	this._connection.query("INSERT INTO tb_users(user_name, user_login, user_password)\
							VALUES (?, ?, ?);",
							[user_name, user_login, user_password], callback);
}

/* EXPORTS */
module.exports = function(){
	return UsersDAO;
}