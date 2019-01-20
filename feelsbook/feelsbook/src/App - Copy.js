import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';


// const fs = require('fs');

class App extends Component {
  
  handleInput = () => {

//     var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

// var toneAnalyzer = new ToneAnalyzerV3({
//   username: process.env.TONE_ANALYZER_USERNAME,
//   password: process.env.TONE_ANALYZER_PASSWORD,
//   // version_date: process.env.TONE_ANALYZER_VERSION_DATE,
//   version_date: '2017-09-21',
//   iam_apikey: 'gY1kgH8Jf6ywYVVqExRmNLbmHTW4vZsKsWErw1qCJQrf',
//   url: 'https://gateway-wdc.watsonplatform.net/tone-analyzer/api'
// });

// var text = 'Team, I know that times are tough! Product '
//   + 'sales have been disappointing for the past three '
//   + 'quarters. We have a competitive product, but we '
//   + 'need to do a better job of selling it!'

// var toneParams = {
//   tone_input: text,
//   content_type: 'text/plain',
//   // tone_input: { 'text': text },
//   // content_type: 'application/json',
//   mode: 'no-cors',
//   // request-mode: 'no-cors',
//   request: 'no-cors'
// };

// var indico = require('indico.io');
// indico.apiKey =  'ffb4b2eec0315754beb450ce4695073e';

// var response = function(res) { console.log(res); }
// var logError = function(err) { console.log(err); }

// // single example
// indico.sentiment("I love writing code!")
//   .then(response)
//   .catch(logError);

// // batch example
// var batchInput = [
//     "I love writing code!",
//     "Alexander and the Terrible, Horrible, No Good, Very Bad Day"
// ];

// indico.sentiment(batchInput)
//   .then(response)
//   .catch(logError);

//   fetch('https://apiv2.indico.io/sentiment', { 
//   mode: 'no-cors',
//   iam_apikey: 'ffb4b2eec0315754beb450ce4695073e',
//   tone_input: "testing indico api",
//   content_type: 'text/plain',
//   credentials: 'include',
//   headers: {"access-control-allow-origin": "localhost",
//   "access-control-allow-credentials": "true"}
// })
//   .then(sentiment => {
//     console.log(JSON.stringify(sentiment, null, 2));
//     // console.table(data);
//     return sentiment;
//   })
//   .catch(e => {
//     console.log(e);
//     return e;
//   });

//CORS error
// toneAnalyzer.tone(toneParams, function (error, toneAnalysis) {
//   if (error) {
//     console.log(error);
//   } else { 
//     console.log(JSON.stringify(toneAnalysis, null, 2));
//   }
// });

//401 unauthorized
// fetch('https://gateway-wdc.watsonplatform.net/tone-analyzer/api', { 
//   mode: 'no-cors',
//   iam_apikey: 'gY1kgH8Jf6ywYVVqExRmNLbmHTW4vZsKsWErw1qCJQrf',
//   tone_input: text,
//   content_type: 'text/plain',
//   credentials: 'include'
// })
//   .then(toneAnalysis => {
//     console.log(JSON.stringify(toneAnalysis, null, 2));
//     // console.table(data);
//     return toneAnalysis;
//   })
//   .catch(e => {
//     console.log(e);
//     return e;
//   });

// wont work due to update: https://console.bluemix.net/docs/services/tone-analyzer/release-notes.html#October2018
// $.ajax({
//   url:'https://gateway-wdc.watsonplatform.net/tone-analyzer/api',
//       data:{
//          'iam_apikey': 'gY1kgH8Jf6ywYVVqExRmNLbmHTW4vZsKsWErw1qCJQrf',
//          'watson-token':'eyJraWQiOiIyMDE3MTAzMC0wMDowMDowMCIsImFsZyI6IlJTMjU2In0.eyJpYW1faWQiOiJpYW0tU2VydmljZUlkLWU5MTExOWJhLTViZGItNDk1Ny1hMDcxLTNjNDI1ZTk4NzM0MyIsImlkIjoiaWFtLVNlcnZpY2VJZC1lOTExMTliYS01YmRiLTQ5NTctYTA3MS0zYzQyNWU5ODczNDMiLCJyZWFsbWlkIjoiaWFtIiwiaWRlbnRpZmllciI6IlNlcnZpY2VJZC1lOTExMTliYS01YmRiLTQ5NTctYTA3MS0zYzQyNWU5ODczNDMiLCJzdWIiOiJTZXJ2aWNlSWQtZTkxMTE5YmEtNWJkYi00OTU3LWEwNzEtM2M0MjVlOTg3MzQzIiwic3ViX3R5cGUiOiJTZXJ2aWNlSWQiLCJ1bmlxdWVfaW5zdGFuY2VfY3JucyI6WyJjcm46djE6Ymx1ZW1peDpwdWJsaWM6dG9uZS1hbmFseXplcjp1cy1lYXN0OmEvZjA1Nzk0MmE1OGZmNDQzNTgwNGZlOTM3ZjZlNmJmOGE6ZWE3Mjc4Y2MtOGUyNi00ODVhLTgxMjQtYjc5ODMxZmJkOTU1OjoiXSwiYWNjb3VudCI6eyJ2YWxpZCI6dHJ1ZSwiYnNzIjoiZjA1Nzk0MmE1OGZmNDQzNTgwNGZlOTM3ZjZlNmJmOGEifSwiaWF0IjoxNTQ3OTUxNzM2LCJleHAiOjE1NDc5NTUzMzYsImlzcyI6Imh0dHBzOi8vaWFtLmJsdWVtaXgubmV0L2lkZW50aXR5IiwiZ3JhbnRfdHlwZSI6InVybjppYm06cGFyYW1zOm9hdXRoOmdyYW50LXR5cGU6YXBpa2V5Iiwic2NvcGUiOiJpYm0gb3BlbmlkIiwiY2xpZW50X2lkIjoiYngiLCJhY3IiOjEsImFtciI6WyJwd2QiXX0.VPZ5BQ7baT1ScE5DPr40keZfMJYP7kWBDiCyovZWQYJy53WcC_RgVJP3hkaKes6MTwwa_n7v3hB-TbQxVQzKf2sCWCPH9O8ES2Fk-RTvKHFb_b33TfwJeRcE9q5VPVYEXwU3nWbr3vweidyX9ht7OgYEw6b7qtPhe-ZZPMEtcp4gZzF0DP8CRdBeyac467V_eTW2RyRDPlrFCDHvmW3NeORLNPbXM7DyMqA_PvJL_wu1IWuVHQPfZKVBeZMdVi8t3sMUQPCSrli4J2LObjTuYEqSMCXx3ZMZjs3EvaxSsohN-xPnN6iAhnxJVehucqN-ta0cDrInkoBvd_LMfOTN3w',
//          'text':text,
//          'version':'v3',
//          'version_date':'2017-09-21'
//      },
//      dataType:'jsonp',
//      contentType:'application/json',
//      method:'GET',
//      success:function(tone){
//          console.log(tone);
//      }
//  });

    // console.log(writeJsonFile);
    console.log("gotinput");
    // var jsonData = JSON.stringify($('#textin').serializeArray());
    // var jsonData = $('#textin').serializeArray();
    // var jsonData = $("#textin #textinput").serializeArray();
    var jsonStr = $("#textinput").val();
    var jsonObj = {};
    jsonObj["text"] = jsonStr;
    // var jsonObj = jQFormSerializeArrToJson(jsonData);
    // var jsonObj = JSON.stringify($("textarea").serializeArray());
    console.log(jsonStr); 
    console.log(jsonObj);

    var json = JSON.stringify(jsonObj);

    
   
  }
    // $.post(remoteurl, jsonStr, 
    //   function(data, status){
    //     alert("Data: " + data + "\nStatus: " + status);
    // });

    // function handleInput() {
    asdf () {
      console.log("READY");
      $('form').submit( function () {
        var formdata = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/",
            data: formdata
         });
        return false;
      });
    }
    
  // }


    // var fs = require('fs');

    // fs.writeFile('myjsonfile.json', json, (err) => {
    //   if (err) throw err;
    //   console.log('saved json');
    // });
    // var writeJsonFile = require('write-json-file');
    // fs.writeFile('data.json', jsonObj, function(err) {
    //   if (err) throw err;
    // });
    // (async () => {
    //   await writeJsonFile('data.json', jsonObj);
    // })();
    // console.log(JSON.stringify(jsonObj)); 
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <form id="textin" action="http://localhost:8080/" method="POST">
            <textarea id="textinput" rows="10" cols="50"></textarea>
            <button type="submit">Submit</button>
          </form>

          {/* <form action="/api/data" method="POST">
    Some data: <input type="text" name="data" id="data">
    <button type="submit">Send</button>
  </form>

          <button onClick={this.handleInput}>Submit Input</button> */}

        </header>
      </div>
    );
  }


export default App;
