var http = require('http');
var fs = require('fs'),
express = require('express'),
path = require('path');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


const https = require('https');


app.post('/inputmsg',function(request,response){
	console.log('Req : '+ request.body.result.parameters.any);
	
	
    var recordNameURL = (request.body.result.parameters.any).trim().replace( / /g, "%20" );
    console.log("recordNameURL :" + recordNameURL);
	
	
	res.on('end', function() {
		
        console.log(" Attribute : " + (request.body.result.parameters.attribute));
		//var speech = "Your answer is received.";
					     
		return response.json({
			speech: "Your answer is received.",
			displayText: "Your answer is received.",
			source: 'poc4'
		});

		});

	request.on('error', function(error) {
		console.log(error);
	});
	
	
});


function send404(response){
	response.writeHead(404, {'Context-Type' : "text/plain"});
	response.write("Error 404 : Page not Found");
	response.end();
}




app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
