module.exports = function(app){
	app.post("/v1/user/create", function(request, response){
		app.controllers.users.ct_create_user.createUser(app, request, response);
	});
}