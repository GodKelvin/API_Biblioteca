module.exports.insert_book = function(app, request, response){
	let erro_desc = "";
	if(typeof(request.body.name_book) == "undefined") erro_desc = "field name_book not defined";
	if(typeof(request.body.author_book) == "undefined") erro_desc = "field author_book not defined";
	if(typeof(request.body.isbn) == "undefined") erro_desc = "field isbn not defined";
	
	if(erro_desc == ""){
		try{
			let name_book = request.body.name_book;
			let author_book = request.body.author_book;
			let isbn = request.body.isbn;
			
			let connection = app.config.mysql();
			let clientMySql = new app.models.BooksDAO(connection);
			
			/*VERIFICAR SE O LIVRO JA EXISTE (ISBN) */
			clientMySql.GetBookByISBN(isbn, function(error, result){
				if(!error){
					if(result.length > 0){
						let res = new Object();
						res.msg = "ISBN = "+isbn+" alread exists";
						res.result = result;
						response.status(200).json(res);
					}else{
						/*SE O ISBN DO LIVRO NAO TIVER CADASTRADO, INSERE */
						clientMySql.InsertBook([name_book, author_book, isbn], function(error, result){
							if(!error){
								let res = new Object();
								res.id_book = result.insertId;
								res.name_book = name_book;
								res.author_book = author_book;
								res.isbn = isbn;
								response.status(200).json(res);
								
							}else{
								
								let res = new Object();
								res.error = error;
								response.status(400).json(res);
							}
						});
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