module.exports = function(app){
	app.delete("/v1/books/delete/:isbn", function(request, response){
		app.controllers.books.ct_delete_book_by_isbn.deleteBookByISBN(app, request, response);
	});
}