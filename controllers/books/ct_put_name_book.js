module.exports.change_name_book = function(app, request, response){
	let erro_desc = "";
	if(typeof(request.body.new_name_book) == "undefined") erro_desc = "field new_name_book not defined";
	if(typeof(request.body.isbn) == "undefined") erro_desc = "field isbn not defined";

	if(erro_desc == ""){
		try{
			let new_name_book = request.body.new_name_book;
			let isbn = request.body.isbn;
			
			let connection = app.config.mysql();
			let clientMySql = new app.models.BooksDAO(connection);
			
			clientMySql.ChangeNameBook([new_name_book, isbn], function(error, result){
				if(!error){
					if(result.affectedRows > 0){
						let res = new Object();
						res.msg = "Name book changed";
						response.status(200).json(res);
						
					}else{
						let res = new Object();
						res.msg = "ISBN not exists";
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
	}else{
		let res = new Object();
		res.error = erro_desc;
		response.status(400).json(res);
	}

}