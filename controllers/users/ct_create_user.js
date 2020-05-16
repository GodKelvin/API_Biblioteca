module.exports.createUser = function(app, request, response){
	let erro_desc = "";
	if(typeof(request.body.user_name) == "undefined") erro_desc = "field user_name not defined";
	if(typeof(request.body.user_login) == "undefined") erro_desc = "field user_login not defined";
	if(typeof(request.body.user_password) == "undefined") erro_desc = "field user_password not defined";
	if(typeof(request.body.user_password_confirm) == "undefined") erro_desc = "field user_password_confirm not defined";
	
	//Verificando senhas diferentes
	if(erro_desc == ""){
		if(request.body.user_password != request.body.user_password_confirm){
			let res = new Object();
			res.error = "user_password and user_password_confirm not equals";
			response.status(400).json(res);
		}	
	}
	
	if(erro_desc == ""){
		try{
			//Pegando os valores vindos da requisicao
			let user_name = request.body.user_name;
			let user_login = request.body.user_login;
			let user_password = request.body.user_password;
			
			//Tentando uma nova conexao com o banco de dados
			//console.log(app.config.mysql());
			let connection = app.config.mysql();
			let client_users_dao = new app.models.users_dao(connection);
			
			client_users_dao.InsertUser([user_name, user_login, user_password], function(error, result){
				if(!error){
					console.log(connection.end());
					//console.log(connection.destroy());
					let res = new Object();
					res.user_name = user_name;
					res.user_login = user_login;
					response.status(200).json(res);
				}else{
					console.log(error);
					let res = new Object();
					res.error = "error bd#1";
					response.status(400).json(res);
				}
			});
			
		}catch(err){
			console.log(err);
			let res = new Object();
			res.error = "try-catch error";
			response.status(400).json(res);
		}
	}else{
		let res = new Object();
		res.error = erro_desc;
		response.status(400).json(res);
	}
}