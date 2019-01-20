//  <script src="libraries/jquery.js"></script> 
// import React from 'react';
// import $ from 'jquery';




var sys = require("sys"),
my_http = require("http");
my_http.createServer(function(request,response){
  sys.puts("I got kicked");
  response.writeHeader(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8080);
sys.puts("Server Running on 8080"); 

var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var toneAnalyzer = new ToneAnalyzerV3({
  username: process.env.TONE_ANALYZER_USERNAME,
  password: process.env.TONE_ANALYZER_PASSWORD,
  // version_date: process.env.TONE_ANALYZER_VERSION_DATE,
  version_date: '2017-09-21',
  iam_apikey: 'gY1kgH8Jf6ywYVVqExRmNLbmHTW4vZsKsWErw1qCJQrf',
  url: 'https://gateway-wdc.watsonplatform.net/tone-analyzer/api'
});

// $.post(remoteurl, jsonStr);
var clienturl = 'http://localhost:3000/'

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if (xhr.readyState == XMLHttpRequest.DONE) {
//         alert(xhr.responseText);
//         console.log(xhr.responseText);
        
//     }
// }
// xhr.open('GET', clienturl, true);
// var text = xhr.responseText;

my_http.get(clienturl, function(resp) {
    var text = "";    
    resp.on('data', function(chunk) {
        text += chunk;
    });
    resp.on('end', function() {
        console.log("THIS IS THE TEXT");
        console.log(text);
        watson(text);
    });
});

var express = require('express');
// var router = express.Router();
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

app.post('/', function(req, res){
    response = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        gender: req.body.gender
        }; 
    console.log(response);
});

var server = app.listen(8080, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("server listening at http://%s:%s", host, port);
});

// router.get('/', function(req, res, next) {
//     res.render('index', {title:'Test',condition:false});
// });

// router.get('/form', function(req, res, next) {
//     res.render('form');
// });

// router.post('/submit', function(req, res, next) {
//     console.log(req.body['test']);
//     res.redirect('/');
// });

module.exports=router;

// applicationCache.

// var axios = require("axios");
// axios.get(clienturl)
//     .then(resp => {
//         console.log(resp.data);
//     });

// console.log(data);

// var text = 'Team, I know that times are tough! Product '
//   + 'sales have been disappointing for the past three '
//   + 'quarters. We have a competitive product, but we '
//   + 'need to do a better job of selling it!'
function watson(text) {
    var toneParams = {
        tone_input: text,
        content_type: 'text/plain',
        // tone_input: { 'text': text },
        // content_type: 'application/json',
        mode: 'no-cors',
        // request-mode: 'no-cors',
        request: 'no-cors'
      };
      
      toneAnalyzer.tone(toneParams, function (error, toneAnalysis) {
        if (error) {
          console.log(error);
        } else { 
          console.log(JSON.stringify(toneAnalysis, null, 2));
          
          var fs = require('fs');
      
          fs.writeFile('toneanalysis.json', JSON.stringify(toneAnalysis, null, 2), (err) => {
              if (err) throw err;
              console.log('saved json');
          });
          
        }
      });
}

