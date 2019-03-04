
var bodyParser = require("body-parser");
var express = require('express');
var cors = require('cors');
var exec = require('child_process').exec;

// Others



var app = express();
app.use(cors());

app.use(bodyParser.json({
   limit: '10mb'
}));

app.get("/",script);

const port = 8080;






var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("app listening at http://%s:%s", host, port)
})

function script(req,res) {
    exec('C:/Python27/python ./python.py', function(error, stdout, stderr) {
        if (stdout) {
            res.status(200).send(stdout);
        } else if (stderr) {
            res.status(400).send(stderr);
        }
        if(error){

        }
    });
}