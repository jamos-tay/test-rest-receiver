function startServer(){
	//process.env.EDGE_NATIVE = "./native/win32/ia32/4.1.1/edge_nativeclr";
	
	const express = require('express');
	var app = express();

	var reslog = [];

	app.post('/', function(req, res){
		console.log('POST /');
		console.log(req.body);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('thanks');
	});
	
	port = process.env.PORT || 3000;;
	app.listen(port);
	console.log('Listening at http://localhost:' + port)
	
}
startServer();