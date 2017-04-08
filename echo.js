var http = require('http');
var url = require('url');
var server = new http.Server(function(req,res){
	console.log(req.method, req.url);
	var urlParser = url.parse(req.url, true);
	console.log(urlParser);
    if(urlParser.pathname == '/SayMeow' && urlParser.query.message){
    	res.setHeader('Cache-control','no-cache');
    	res.writeHead(200,"OK",{'Cache-control':'no-cache'});c

    	res.end('Cat says: '+urlParser.query.message)
    } else {
    	res.statusCode = 404;
    	res.end("Page not found")
    }
	res.end('404');
});
server.listen(1338, '127.0.0.1');
