module.exports = function(app){
	app.put("/v1/books/name", function(request, response){
		app.controllers.books.ct_put_name_book.change_name_book(app, request, response);
	});
}