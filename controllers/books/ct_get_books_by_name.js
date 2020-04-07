module.exports.listBooksByName = function(app, request, response){
	try{
		let name_book = request.params.name_book;
		let connection = app.config.mysql();
		let clientMySql = new app.models.BooksDAO(connection);
		
		clientMySql.GetBooksByName(name_book, function(error, result){
			if(!error){
				response.status(200).json(result);
			}else{
				let res = new Object();
				res.error = error;
				response.status(400).json(res);
			}
		});
		
	}catch(err){
		let res = new Object();
		//res.error = String(err);
		res.error = "try-catch error";
		response.status(400).json(res);
	}
}
