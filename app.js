let app = require("./config/server");
let port = 8080;

app.listen(port, function(){
	console.log("*****\nSERVIDOR OUVINDO NA PORTA: " + port + "\n*****");
});
