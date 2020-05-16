let mariadb = require("mysql");

let dbConnection = function(){
	if(!dbConnection.instance){
		dbConnection.instance = mariadb.createConnection({
			host: "localhost",
			user: process.env.user_bd,
			password: process.env.pass_bd,
			database: process.env.biblioteca_database_name
		});
		console.log("LehrbackCloud Conectado!");
	}
	return dbConnection.instance;
	/*let connection = mariadb.createConnection({
		host: "localhost",
		user: process.env.user_bd,
		password: process.env.pass_bd,
		database: process.env.biblioteca_database_name
	});
	console.log("Acesso concedido ao banco de dados");
	return connection;*/
}

module.exports = function(){
	//console.log("Acesso concedido ao bando de dados");
	return dbConnection;
}