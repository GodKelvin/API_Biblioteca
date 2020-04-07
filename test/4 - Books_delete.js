/*REQUIRES*/
let chai = require("chai");
let server = require("../config/server");
let chaiHttp = require("chai-http");
let Books = require("../models/BooksDAO");

/*ENCURTANDO OS COMANDOS */
let expect = chai.expect;


chai.use(chaiHttp);

describe("Books - DELETE", function(){
	
	let isbn = "123";
	it("/DELETE - Delete book by ISBN", function(done){
		chai.request(server)
		.delete("/v1/books/delete/"+isbn)
		.end(function(err, res){
			expect(res).to.have.status(200);
			expect(res.body).to.be.a("object");
			
			done();
		});
	});
	
});