var http = require("http")
var array = []
array.push({id:1,name:"cane",codice:"cod1",descrizione:"desc1"})
array.push({id:2,name:"cane",codice:"cod2",descrizione:"desc2"})
array.push({id:3,name:"cane",codice:"cod3",descrizione:"desc3"})


//create a server object:
http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.write(JSON.stringify(array)); //write a response to the client
    res.end(); //end the response
  }).listen(3000); //the server object listens on port 8080