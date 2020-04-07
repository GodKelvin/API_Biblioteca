module.exports = function(app){
	app.post("/v1/books/insertbook", function(request, response){
		app.controllers.books.ct_post_book.insert_book(app, request, response);
	});
	
}