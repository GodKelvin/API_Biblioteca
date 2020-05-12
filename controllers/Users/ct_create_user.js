module.exports.create_user = function(app, request, response){
	let erro_desc = "";
	if(typeof(request.body.user_name) == "undefined") erro_desc = "field user_name not defined";
	if(typeof(request.body.user_login) == "undefined") erro_desc = "field user_login not defined";
	if(typeof(request.body.user_password) == "undefined") erro_desc = "field user_password not defined";
	if(typeof(request.body.user_password_confirm) == "undefined") erro_desc = "field user_password_confirm not defined";
	
	//Verificando senhas diferentes
	if(erro_desc == ""){
		if(request.body.user_password != request.body.user_password_confirm){
			erro_desc = "user_password and user_password_confirm not equals";
		}	
	}
	
	if(erro_desc == ""){
		try{
			let user_name = request.body.user_name;
			let user_login = request.body.user_login;
			let user_password = request.body.user_password;
			
		}catch(err){
			let res = new Object();
			res.error = err;
			response.status(400).json(res);
		}
	}else{
		let res = new Object();
		res.error = erro_desc;
		response.status(400).json(res);
	}
}