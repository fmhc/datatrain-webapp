 /*
no parameter
 [ { id: 14, name: 'Arriva Polen' }, ... ]
 */
operatorsUrl = "http://hackathon.colibri-labs.de/api/db/1/operators.json";

/* 
parameter int vehicleType (ID) 
[
    {
        "id": 19,
        "name": "*",
        "image": "images/db/modelType/Bordbistro_R186.9.jpg",
        "vehicleTypeId": 1,
        "vehicleType": "Zug"
    },
    ...
]    
*/
modelTypesUrl = "http://hackathon.colibri-labs.de/api/db/1/modelTypes.json";

/*
no parameter

[
    {
        "id": 4,
        "name": "Aufsteller"
    },
    {
        "id": 2,
        "name": "Bus"
    },
    {
        "id": 3,
        "name": "PKW"
    },
    {
        "id": 1,
        "name": "Zug"
    }
]
*/
vehicleTypesUrl = "http://hackathon.colibri-labs.de/api/db/1/vehicleTypes.json";

/*
no parameter

[
    {
        "id": 1,
        "name": "Mobil"
    },
    {
        "id": 2,
        "name": "Station\u00e4r"
    }
]
*/
pcTypesUrl = "http://hackathon.colibri-labs.de/api/db/1/pcTypes.json";

/* 
no parameter

[ { issuerIdentifierNumber: 894901,
    name: 'Deutsche Telekom AG',
    properties: { color: '#E20074' } },
  { issuerIdentifierNumber: 894902,
    name: 'Deutsche Telekom AG',
    properties: { color: '#E20074' } },
  { issuerIdentifierNumber: 894903,
    name: 'Deutsche Telekom AG',
    properties: { color: '#E20074' } },
  { issuerIdentifierNumber: 894920,
    name: 'Vodafone D2',
    properties: { color: '#e60000' } } ]
*/
simproviderUrl = "http://hackathon.colibri-labs.de/api/db/1/simprovider.json";

/* 
parameter string name (optional to filter stations by name)

[
    {
        "id": 8000001,
        "name": "Aachen Hbf",
        "shortTag": "KA",
        "lat": 50.7678,
        "lng": 6.091499
    },
    ...
]    
*/
stationsUrl = "http://hackathon.colibri-labs.de/api/db/1/stations.json";

// parameter string trainType
// parameter string trainNumber
// parameter int|string time
trainScheduleUrl = "http://hackathon.colibri-labs.de/api/db/1/trainSchedule.json";

/*
parameter int operatorID (optiona)
parameter int pcType (optiona)
parameter int modelType (optiona)
parameter int vehicleType (optiona)

[
    {
        "mac": "00:c0:3a:b1:d4:30",
        "name": "DB MaPool BR744 971756-01017-1",
        "lastCall": 1510603619,
        "id": 1,
        "lat": 52.4868,
        "lng": 13.5104,
        "operator": "DB Maschinenpool",
        "operatorId": 17,
        "trainType": "RE",
        "trainNumber": 0,
        "station": null,
        "stationId": null,
        "modelType": "BR744.0",
        "modelTypeImage": "images/db/modelType/20170308154449.01.jpg",
        "modelTypeId": 24,
        "vehicleType": "Zug",
        "vehicleTypeId": 1,
        "pcType": "Mobil",
        "pcTypeId": 1
    },
    ...
]
*/    
systemsUrl = "http://hackathon.colibri-labs.de/api/db/1/systems.json";

/* 
parameter string mac
parameter int ID
{
    "id": 1,
    "mac": "00:c0:3a:b1:d4:30",
    "name": "DB MaPool BR744 971756-01017-1",
    "properties": {
        "piwikId": "",
        "baptizer": "1.03",
        "webTheme": "db",
        "webCreated": "1481116683",
        "monitorTheme": "regio",
        "monitorVersion": "1.00",
        "imageVersion": "colibri-1.0-20161207"
    },
    "trainType": "RE",
    "trainNumber": 0,
    "station": null,
    "stationId": null,
    "modelType": "BR744.0",
    "modelTypeImage": "https://dbdata.colibri-w.de/images/db/modelType/20170308154449.01.jpg",
    "pcType": "Mobil",
    "vehicleType": "Zug",
    "operator": "DB Maschinenpool",
    "sims": [
        {
            "sim": "89490200001367396937",
            "signalType": "lte",
            "strength": -80,
            "provider": "Deutsche Telekom AG"
        }
    ],
    "jobs": [],
    "gps": {
        "lat": 52.48678,
        "lng": 13.51038,
        "speed": 0,
        "time": 1510541862
    },
    "traffic": [
        {
            "month": "201711",
            "colibriUpload": false,
            "colibriDownload": false,
            "upload": false,
            "download": false,
            "simtraffic": [
                {
                    "sim": "89490200001367396937",
                    "download": 13972283,
                    "upload": 10599311,
                    "month": "201711",
                    "provider": "Deutsche Telekom AG"
                }
            ]
        },
        {
            "month": "201710",
            "colibriUpload": false,
            "colibriDownload": false,
            "upload": false,
            "download": false,
            "simtraffic": [
                {
                    "sim": "89490200001367396937",
                    "download": 70425476,
                    "upload": 53382248,
                    "month": "201710",
                    "provider": "Deutsche Telekom AG"
                }
            ]
        },
        {
            "month": "201709",
            "colibriUpload": false,
            "colibriDownload": false,
            "upload": false,
            "download": false,
            "simtraffic": [
                {
                    "sim": "89490200001367396937",
                    "download": 32901742,
                    "upload": 25001577,
                    "month": "201709",
                    "provider": "Deutsche Telekom AG"
                }
            ]
        },
        {
            "month": "201708",
            "colibriUpload": false,
            "colibriDownload": false,
            "upload": false,
            "download": false,
            "simtraffic": [
                {
                    "sim": "89490200001285209097",
                    "download": 81908590,
                    "upload": 62535415,
                    "month": "201708",
                    "provider": "Deutsche Telekom AG"
                },
                {
                    "sim": "89490200001367396937",
                    "download": 1151169,
                    "upload": 900649,
                    "month": "201708",
                    "provider": "Deutsche Telekom AG"
                }
            ]
        },
        {
            "month": "201707",
            "colibriUpload": false,
            "colibriDownload": false,
            "upload": false,
            "download": false,
            "simtraffic": [
                {
                    "sim": "89490200001285209097",
                    "download": 62760849,
                    "upload": 48944829,
                    "month": "201707",
                    "provider": "Deutsche Telekom AG"
                }
            ]
        }
    ],
    "baptismHistory": [],
    "messages": [],
    "systemInfo": null
}
*/
systemUrl = "http://hackathon.colibri-labs.de/api/db/1/system.json";

/*
parameter string mac
parameter int ID
parameter int|string fromTime (UNIX Timestamp)
parameter int|string toTime

[
    {
        "lat": 50.0897,
        "lng": 8.9785,
        "speed": 0,
        "time": 1512770047,
        "simData": [
            {
                "sim": "89490200001367396903",
                "strength": -92,
                "signalType": "lte"
            }
        ]
    },
    ...
]    
*/
gpsHistoryUrl = "http://hackathon.colibri-labs.de/api/db/1/gpsHistory.json";

/*
parameter string mac
parameter int ID
parameter int|string fromTime
parameter int|string toTime

{ time: 1513131892,
  properties: 
   { temperatureWE2: 
      { label: 'Raumtemperatur WE2 3. Abteil',
        value: 24.2,
        unit: '°C' },
     temperatureIndoor: { label: 'Raumtemperatur Großraum', value: 20, unit: '°C' },
     temperatureZub: { label: 'Raumtemperatur Zub', value: 23.6, unit: '°C' },
     temperatureS1: { label: 'Raumtemperaur S1- Schrank', value: 27.9, unit: '°C' },
     temperatureOutside: { label: 'Außentemperatur', value: 0.5, unit: '°C' },
     temperature1: { label: 'Verdampferendtemperatur', value: 0.3, unit: '°C' },
     temperatureCooling: { label: 'Temperatur Drehrichter Kälte', value: 0.2, unit: '°C' },
     temperatureH5: { label: 'Temperatur H5 Kasten', value: 16.9, unit: '°C' },
     levelFreshWaterWE1: { label: 'Füllstand Frischwasser WE1', value: 80, unit: '%' },
     levelFreshWaterWE2: { label: 'Füllstand Frischwasser WE2', value: 40, unit: '%' },
     levelWastewaterWE1: { label: 'Füllstand Abwasser WE1', value: 60, unit: '%' },
     levelWastewaterWE2: { label: 'Füllstand Abwasser WE2', value: 60, unit: '%' },
     highPressureAc: { label: 'Hochdrucksensor Klima', value: 2.36, unit: 'bar' },
     lowPressureAc: { label: 'Niederdrucksensor Klima', value: 2.35, unit: 'bar' },
     oilAc: { label: 'Öldruck Klima', value: 2.32, unit: 'bar' },
     acVoltage: { label: 'Batteriepsannung', value: 28, unit: 'V' },
     presssostat: { label: 'Pressostat HD Klima', value: 0, unit: 'bool' },
     presssostat2: { label: 'Pressostat ND Klima', value: 0, unit: 'bool' },
     powerFailure: { label: 'Energieversorgung gestört', value: 0, unit: 'bool' },
     mainswitch: { label: 'Zugspannung Ein', value: 8, unit: 'bool' },
     wcFailure: { label: 'WC gestört', value: 0, unit: 'bool' },
     doorFailure: { label: 'Tür gestört', value: 0, unit: 'bool' },
     batterySwitch: { label: 'Batterieladung Ein', value: 64, unit: 'bool' } } }

*/
sensorsUrl = "http://hackathon.colibri-labs.de/api/db/1/sensors.json";

/*
parameter string mac
parameter int ID
parameter int|string fromTime
parameter int|string toTime
*/
diagnoseUrl = "http://hackathon.colibri-labs.de/api/db/1/diagnose.json";

/*
parameter string mac
parameter int ID
parameter int|string fromTime
parameter int|string toTime
*/
afzUrl = "http://hackathon.colibri-labs.de/api/db/1/afz.json";


/* 
todo: 
parameter and parameter name
NullPointer at no params?
*/
function getData(theUrl, p1 = 0, p2 = 0, p3 = 0, p4 = 0) {
	parameters = [];
	deep = "/"

	for (var i = 1, j = arguments.length; i < j; i++){
        parameters.push(arguments[i]);
        console.log(parameters);
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
    console.log(params);

	//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	//var xhttp = new XMLHttpRequest();
	var theUrlx = theUrl + "?params=" + params;
	console.log(theUrlx);
	//xhttp.open("GET", theUrlx, false);
	//xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
	//xhttp.send(params);
	//var response = JSON.parse(xhttp.responseText);


    var data = params;

	/*
	*/
/*

    

	console.log(response);
	console.log(response[0]['properties']['temperatureOutside']);
	console.log(response.length);
*/
}

$.get("/data", function(data){
        console.log(data);
        var response = data;
        for (var i = 0, j = response.length; i < j; i++) {
            var obj = response[0]['properties'];
            console.log(obj);
            for (var key in obj) {
                console.log("label: " + obj[key]['label'] + "   value:  " + obj[key]['value'] + "   unit:  " + obj[key]['unit']);
            }
        }
        $('.results').html(response[0]['properties']['batterySwitch']['label']);

        if (response[0]['properties']['mainswitch']['value'] != 0) {
            $('#mainswitch').html(response[0]['properties']['mainswitch']['label']);
        } else {
            $('#mainswitch').html("Zugspannung Aus");
        }

        if (response[0]['properties']['powerFailure']['value'] == 0) {
            $('#powerFailure').html("Keine Störung der Zugspannung");
        } else {
            $('#powerFailure').html("Störung der Zugspannung");
        }
        $('#acVoltage').html(response[0]['properties']['acVoltage']['label'] + " " + response[0]['properties']['acVoltage']['value'] + response[0]['properties']['acVoltage']['unit']);
        $('#batterySwitch').html(response[0]['properties']['batterySwitch']['label']);
        
        $('#freshwaterLevelWE1').html(response[0]['properties']['levelFreshWaterWE1']['value'] + " %");
        $('#freshwaterLevelWE2').html(response[0]['properties']['levelFreshWaterWE2']['value'] + " %");
        $("#freshwaterLevelWE1width").width(response[0]['properties']['levelFreshWaterWE1']['value'] + "%")
        $("#freshwaterLevelWE2width").width(response[0]['properties']['levelFreshWaterWE2']['value'] + "%")
        
        $('#levelWastewaterWE1').html(response[0]['properties']['levelWastewaterWE1']['value'] + " %");
        $('#levelWastewaterWE2').html(response[0]['properties']['levelWastewaterWE2']['value'] + " %");
        $('#levelWastewaterWE1width').width(response[0]['properties']['levelWastewaterWE1']['value'] + "%");
        $('#levelWastewaterWE2width').width(response[0]['properties']['levelWastewaterWE2']['value'] + "%");
        
        if (response[0]['properties']['wcFailure']['value'] == 0) {
            $('#wcFailure').html(" WC ok");
        } else {
            $('#wcFailure').html(" Störung des WCs");
        }

        if (response[0]['properties']['doorFailure']['value'] == 0) {
            $('#doorFailure').html(" Tür ok");
        } else {
            $('#doorFailure').html(" Störung der Tür");
        }

        $('#temperatureOutside').html(response[0]['properties']['temperatureOutside']['value'] + " " + response[0]['properties']['temperatureOutside']['unit']);
        $('#temperatureOutsideLabel').html(response[0]['properties']['temperatureOutside']['label']);
        $('#temperatureWE2').html(response[0]['properties']['temperatureWE2']['value'] + " " + response[0]['properties']['temperatureWE2']['unit']);
        $('#temperatureWE2Label').html(response[0]['properties']['temperatureWE2']['label']);
        $('#temperatureIndoor').html(response[0]['properties']['temperatureIndoor']['value'] + " " + response[0]['properties']['temperatureIndoor']['unit']);
        $('#temperatureIndoorLabel').html(response[0]['properties']['temperatureIndoor']['label']);
        $('#temperatureZub').html(response[0]['properties']['temperatureZub']['value'] + " " + response[0]['properties']['temperatureZub']['unit']);
        $('#temperatureZubLabel').html(response[0]['properties']['temperatureZub']['label']);
        $('#temperatureS1').html(response[0]['properties']['temperatureS1']['value'] + " " + response[0]['properties']['temperatureS1']['unit']);
        $('#temperatureS1Label').html(response[0]['properties']['temperatureS1']['label']);        
        $('#temperatureH5').html(response[0]['properties']['temperatureH5']['value'] + " " + response[0]['properties']['temperatureH5']['unit']);
        $('#temperatureH5Label').html(response[0]['properties']['temperatureH5']['label']);        







        console.log(response);
    })

//getData(sensorsUrl, "00:c0:3a:b1:d4:30", "1", "1510541862", "1513374276");
/*
todo:
urls etc int .json
*/

