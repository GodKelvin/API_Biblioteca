function BooksDAO(connection){
	this._connection = connection;
}

BooksDAO.prototype.Ruok = function(callback){
	this._connection.query("SHOW tables;", callback);
}

/* GETS */
BooksDAO.prototype.GetBooks = function(callback){
	this._connection.query("SELECT * FROM tb_books;", callback);
}

BooksDAO.prototype.GetBookByISBN = function(isbn, callback){
	this._connection.query("SELECT * FROM tb_books\
							WHERE isbn = ?;",
							isbn, callback);
}

BooksDAO.prototype.GetBooksByName = function(name_book, callback){
	this._connection.query("SELECT name_book, author_book ,isbn \
							FROM tb_books \
							WHERE name_book LIKE ?;",
							'%'+name_book+'%', callback);
}

BooksDAO.prototype.GetBooksByAuthor = function(author_book, callback){
	this._connection.query("SELECT name_book, author_book ,isbn \
							FROM tb_books \
							WHERE author_book LIKE ?;",
							'%'+author_book+'%', callback);
}


/* POSTS */
BooksDAO.prototype.InsertBook = function([name_book, author_book, isbn], callback){
	this._connection.query("INSERT INTO tb_books (name_book, author_book, isbn)\
							VALUES(?, ?, ?);", 
							[name_book, author_book, isbn], callback);
}

BooksDAO.prototype.ExistsISBN = function(isbn, callback){
	this._connection.query("SELECT COUNT(*)\
							FROM tb_books\
							WHERE isbn = ?;",
							isbn, callback);
}

/* UPDATES (PUT) */
BooksDAO.prototype.ChangeNameBook = function([new_name_book, isbn], callback){
	this._connection.query("UPDATE tb_books\
							SET name_book = ?\
							WHERE isbn = ?;",
							[new_name_book, isbn], callback);
}

/* DELETE */
BooksDAO.prototype.DeleteBookByISBN = function(isbn, callback){
	this._connection.query("DELETE FROM tb_books \
							WHERE isbn = ?;",
							isbn, callback);
}

/* DEV */
//Deleta todos os livros de `tb_books`
BooksDAO.prototype.DeleteAllBooks = function(callback){
	this._connection.query("TRUNCATE TABLE tb_books;", callback);
	
}



/* EXPORTS */
module.exports = function(){
	return BooksDAO;
}