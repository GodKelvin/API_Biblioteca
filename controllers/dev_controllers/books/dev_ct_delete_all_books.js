module.exports.devDeleteAllBooks = function(app, request, response){
	try{
		let connection = app.config.mysql();
		let clientMySql = new app.models.BooksDAO(connection);
		//console.log("opa1");
		clientMySql.DeleteAllBooks(function(error, result){
			//console.log(error);
			if(!error){
				let res = new Object();
				res.msg = "Dados apagados de tb_books";
				response.status(200).json(res);
			}else{
				let res = new Object();
				res.error = error;
				response.status(400).json(res);
			}
		});
	}catch(err){
		let res = new Object();
		res.error = err.toString();
		response.status(400).json(res);
	}
	
}