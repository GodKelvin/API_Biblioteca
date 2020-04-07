//import { booksTest } from './Books/book_teste.js'

/*REQUIRES*/
let chai = require("chai");
let server = require("../config/server");
let chaiHttp = require("chai-http");
let Books = require("../models/BooksDAO");

/*ENCURTANDO OS COMANDOS */
let expect = chai.expect;

/*INCLUINDO UM ARQUIVO DE FORA */

chai.use(chaiHttp);

describe("Books - GET", function(){
	
	let isbn = 123;
	let name_book = "Cavaleiros";
	let author_name = "Kelvin";
	
	it("/GET - List books", function(done){
		chai.request(server)
		.get("/v1/books/")
		.end(function(err, res){
				
			expect(res).to.have.status(200);
			expect(res.body).to.be.a("array");
			
			/* SE O ARRAY NAO FOR NULO */
			if(res.body.length > 0){
				expect(res.body[0]).to.have.property("name_book");
				expect(res.body[0]).to.have.property("author_book");
				expect(res.body[0]).to.have.property("isbn");
			}
			
			done();
		});
	});
	
	it("/GET - List boks by name", function(done){
		chai.request(server)
		.get("/v1/books/name/" + name_book)
		.end(function(err, res){
				
			expect(res).to.have.status(200);
			expect(res.body).to.be.a("array");
			
			/* SE O ARRAY NAO FOR NULO */
			if(res.body.length > 0){
				expect(res.body[0]).to.have.property("name_book");
				expect(res.body[0]).to.have.property("author_book");
				expect(res.body[0]).to.have.property("isbn");
			}
			
			done();
		});
	});
	
	it("/GET - List books by ISBN", function(done){
		chai.request(server)
		.get("/v1/books/isbn/" + isbn)
		.end(function(err, res){
				
			expect(res).to.have.status(200);
			expect(res.body).to.be.a("array");
			
			/* SE O ARRAY NAO FOR NULO */
			if(res.body.length > 0){
				expect(res.body[0]).to.have.property("name_book");
				expect(res.body[0]).to.have.property("author_book");
				expect(res.body[0]).to.have.property("isbn");
			}
			
			done();
		});
	});
	

	it("/GET - List books by author", function(done){
		chai.request(server)
		.get("/v1/books/author/" + author_name)
		.end(function(err, res){
				
			expect(res).to.have.status(200);
			expect(res.body).to.be.a("array");
			
			/* SE O ARRAY NAO FOR NULO */
			if(res.body.length > 0){
				expect(res.body[0]).to.have.property("name_book");
				expect(res.body[0]).to.have.property("author_book");
				expect(res.body[0]).to.have.property("isbn");
			}
			
			done();
		});
	});
});

//bookTeste(server);