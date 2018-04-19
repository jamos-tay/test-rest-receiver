function startServer(){
	//process.env.EDGE_NATIVE = "./native/win32/ia32/4.1.1/edge_nativeclr";
	
	const express = require('express');
	var app = express();

	var reslog = [];

	app.post('/', function(req, res){
		console.log('POST /');
		reslog.push(req);
		console.dir(req.body);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('thanks');
	});
	
	app.get('/', function(req, res){
		console.log('GET /')
		res.end(reslog.toString());
	});
	
	port = process.env.PORT || 3000;;
	app.listen(port);
	console.log('Listening at http://localhost:' + port)
	
}
startServer();