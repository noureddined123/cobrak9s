//const https = require('https');
const request = require('request');



//function myFunc(){
//    https.get('https://www.google.com/', (resp) => {
//        resp.on('end', () => {
//        console.log('test');
//    });
//    }).on("error", (err) => {
//        console.log("Error: " + err.message);
//    });
//}


    function test(){
    request('https://jsonplaceholder.typicode.com/todos/1', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body.title);
    console.log(body.completed)

    });
    }
    setInterval(test, 5000);

