module.exports.listBooks = function(app, request, response){
	try{
		//let connection = app.config.mysql();
		let connection = app.config.mysql;
		let clientMySql = new app.models.books_dao(connection);
		
		
		clientMySql.GetBooks(function(error, result){
			if(!error){
				response.status(200).json(result);
				
			}else{
				
				let res = new Object();
				res.error = error;
				response.status(400).json(res);
			}
		});
		
	}catch(err){
		
		//console.log(err);
		let res = new Object();
		res.error = String(err);
		//res.error = err;
		response.status(400).json(res);
	}
	
}