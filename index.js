const tr = require('tor-request');
const tor_axios = require('tor-axios');
tr.request('https://api.ipify.org', function (err, res, body) {
  if(err){
    console.error(err)
  }
  if (res.statusCode == 200) {
    console.info("Tor Request : Your public (through Tor) IP is: " + body);
  }
});

const tor = tor_axios.torSetup({
    ip: 'localhost',
    port: 9050,
})
 
tor.get('http://api.ipify.org').then((res)=>{
  console.info("Tor Axios : Your public (through Tor) IP is: " + res.data);
})

