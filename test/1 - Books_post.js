/*REQUIRES*/
let chai = require("chai");
let server = require("../config/server");
let chaiHttp = require("chai-http");
//let Books = require("../models/BooksDAO");

/*ENCURTANDO OS COMANDOS */
let expect = chai.expect;


chai.use(chaiHttp);

describe("Books - POST", function(){
	
	/* DECLARACAO DE VARIAVEIS */
	let name, isbn, author;
	
	it("/POST - Insert new book", function(done){
		
		/* DEFINIIR EXEMPLO A SER ENVIADO PARA A REQUISICAO */
		let novoLivro = {
			name_book: "Os Cavaleiraaaaaaaaaaos",
			author_book: "Kelvin",
			isbn: "12sadsassdsas3"
		};
		
		/*FAZENDO A REQUISICAO NO SERVIDOR -> TIPO, ENVIO(se tiver), TERMINA CHECANDO ==> */
		chai.request(server)
		.post("/v1/books/insertbook")
		.send(novoLivro)
		.end(function(err, res){
				
			//"A RESPOSTA DEVE TER O STATUS 200"
			expect(res).to.have.status(200);
			
			//"A RESPOSTA DEVE CONTER NO CORPO UM OBJETO"
			expect(res.body).to.be.a("object");
			
			//"DENTRO DO OBJETO DEVE CONTER UMA PROPRIEDADE CHAMADA name_book"
			expect(res.body).to.have.property("name_book");
			expect(res.body).to.have.property("author_book");
			expect(res.body).to.have.property("isbn");
			
			/*ARMAZENANDO OS VALORES RETORNADOS PARA OS TESTES POSTERIORES*/
			name = res.body.name;
			author = res.body.author;
			isbn = res.body.isbn;
			
			/* FINALIZA O RESPECTIVO TESTE E ENCERRA */
			done();
		});
		
		
	});
});