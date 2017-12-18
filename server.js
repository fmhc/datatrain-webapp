var http = require('http');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.sendFile(__dirname + "/public/index.html" );
})

app.get('/results', function (req, res) {
   res.sendFile(__dirname + "/public/results.html" );
})

app.get('/data', function (req, res) {
	var url = getData(sensorsUrl, "00:c0:3a:b1:d4:30", "1", "1510541862", "1513374276");
	http.get(url, function(result) {
		var body = '';
		result.on('data', function(chunk){
			body += chunk
		});
		result.on('end', function(){
			var response = JSON.parse(body);
			res.json(response);
		})
  })
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));


sensorsUrl = "http://hackathon.colibri-labs.de/api/db/1/sensors.json";

function getData(theUrl, p1 = 0, p2 = 0, p3 = 0, p4 = 0) {
	parameters = [];

	for (var i = 1, j = arguments.length; i < j; i++){
        parameters.push(arguments[i]);
        //console.log(parameters);
    }

    if (theUrl.includes("systems")) {
    	var params = JSON.stringify({operatorId:parseInt(parameters[0]), pcType:parseInt(parameters[1]), modelType:parseInt(parameters[2]), vehicleType:parseInt(parameters[3])});
    } else if (parameters.length == 4) {
    	var params = JSON.stringify({mac:parameters[0], id:parseInt(parameters[1]), fromTime:parameters[2], toTime:parameters[3]});
    } else if (parameters.length == 3) {
    	var params = JSON.stringify({trainType:parameters[0], trainNumber:parameters[1], time:parameters[2]});
    } else if (parameters.length == 2) {
    	var params = JSON.stringify({mac:parameters[0], id:parseInt(parameters[1])});
    } else if (theUrl.includes("modelTypes")) {
    	var params = JSON.stringify({vehicleType:parseInt(parameters[0])});
    } else if (parameters.length == 1) {
    	var params = JSON.stringify({name:parameters[0]});
    }

	var theUrlx = theUrl + "?params=" + params;
	return theUrlx;
}


var server = app.listen(8080, function () {
   var port = server.address().port
   console.log("DataTrain Colibri-W ICE Dashboard")
   console.log("Webserver listening at http://localhost:%s", port)
})