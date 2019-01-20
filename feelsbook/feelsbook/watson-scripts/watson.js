const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var keyfile = require('./key.json');

var toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    iam_apikey: keyfile.key,
    url: 'https://gateway.watsonplatform.net/tone-analyzer/api'
});

const server = http.createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        // At this point, we have the headers, method, url and body, and can now
        // do whatever we need to in order to respond to this request.
        console.log("BODY: " + body)
        // BEGINNING OF NEW STUFF

        var moodAnalysis = {};

        toneAnalyzer.tone(
            {
                tone_input: 'Greetings from the Watson Developer Cloud Node SDK, we are pleased to say hello!',
                content_type: 'text/plain'
            },
            function (err, tone) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('tone endpoint:');
                    console.log(JSON.stringify(tone, null, 2));
                    
                    response.on('error', (err) => {
                        console.error(err);
                    });

                    response.statusCode = 200;
                    response.setHeader('Content-Type', 'application/json');

                    const responseBody = { headers, method, url, body, tone };

                    response.write(JSON.stringify(responseBody));
                    response.end();
                    // Note: the 2 lines above could be replaced with this next one:
                    // response.end(JSON.stringify(responseBody))

                    // END OF NEW STUFF
                }
            }
        );

    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
