module.exports = function(app){
	app.delete("/dev/books/delete-all", function(request, response){
		app.controllers.dev_controllers.books.dev_ct_delete_all_books.devDeleteAllBooks(app, request, response);
	});
}