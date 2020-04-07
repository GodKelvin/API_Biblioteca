/* REQUIRES */
let bodyParser = require("body-parser");
let consign = require("consign");
let express = require("express");

/* INICIANDO A INSTANCIA DO EXPRESS */
let app = express();

/* MIDDLEWARES */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/* CARREGANDO OS MODULOS */
consign()
	.include("routes")
	.then("/controllers")
	.then("/models")
	.then("config/mysql.js")
	.into(app);


/* EXPORTS */
module.exports = app;

