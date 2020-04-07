module.exports = function(app){
	
	app.get("/v1/books/", function(request, response){
		app.controllers.books.ct_get_books.listBooks(app, request, response);
	});
	
	app.get("/v1/books/name/:name_book", function(request, response){
		app.controllers.books.ct_get_books_by_name.listBooksByName(app, request, response);
	});
	
	app.get("/v1/books/isbn/:isbn", function(request, response){
		app.controllers.books.ct_get_book_by_isbn.listBookByIsbn(app, request, response);
	});
	
	app.get("/v1/books/author/:author_book", function(request, response){
		app.controllers.books.ct_get_books_by_author.listBooksByAuthor(app, request, response);
	});
	
	
}