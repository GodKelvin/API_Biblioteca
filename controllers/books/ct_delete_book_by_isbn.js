module.exports.deleteBookByISBN = function(app, request, response){
	try{
		let isbn = request.params.isbn;
		
		let connection = app.config.mysql();
		let clientMySql = new app.models.books_dao(connection);
		
		clientMySql.DeleteBookByISBN(isbn, function(error, result){
			if(!error){
				if(result.affectedRows > 0){
					let res = new Object();
					res.isbn = isbn;
					res.msg = "Book deleted";
					response.status(200).json(res);
				}else{
					let res = new Object();
					res.isbn = isbn;
					res.msg = "isbn not exists";
					response.status(200).json(res);
				}
			}else{
				let res = new Object();
				res.error = error;
				response.status(400).json(res);
			}
		});
	}catch(err){
		console.log(err);
		let res = new Object();
		res.error = "try-catch error";
		response.status(400).json(res);
	}
}