let app = require("./config/server");
let port = 3100;

app.listen(port, function(){
	console.log("*****\nSERVIDOR OUVINDO NA PORTA: " + port + "\n*****");
});
