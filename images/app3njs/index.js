const https = require('https');
https.get('https://www.appdynamics.com/', (resp) => {

  resp.on('data', () => {
    console.log('test');
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

