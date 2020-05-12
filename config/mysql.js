let mariadb = require("mysql");

let dbConnection = function(){
	if(!dbConnection.instance){
		dbConnection.instance = mariadb.createConnection({
			host: "localhost",
			user: "lehrbacklocal",
			password: "clara",
			database: "lehrbackBiblioteca"
		});
		console.log("LehrbackCloud Conectado!");
	}
	return dbConnection.instance;
}

module.exports = function(){
	//console.log("Acesso concedido ao bando de dados");
	return dbConnection;
}