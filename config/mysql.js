let mariadb = require("mysql");

//Dados da conexao (pool)
let db_config = {
	connectionLimit: 2,
	host: "localhost",
	user: process.env.user_bd,
	password: process.env.pass_bd,
	database: process.env.biblioteca_database_name
};

//Criando a piscina de conexões
let pool = mariadb.createPool(db_config);

pool.getConnection(function(error, connection){
	if(!error){
		console.log("[MariaDB] -> Connection established");
		connection.release();
	}else{
		console.log(error);
	}
	return;
});

//Retornando a "pool" de conexoes
module.exports = function(){
	return pool;
}


