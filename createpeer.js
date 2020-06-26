global.window = {document: {createElementNS: () => {return {}} }};
global.navigator = {};
global.btoa = () => {};

const peerJs = require('peerjs-nodejs');
const peer2 = peerJs('andrewcgaitskell',{
  host: '35.214.117.188' ,
  port: 9000 ,
  path: '/myapp'
});


const http = require('http');


http.createServer(function (req, res) {

  
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  res.write('Creating Peer!');
  
  var conn = peer2.connect('andrewcgaitskell');
// on open will be launch when you successfully connect to PeerServer
conn.on('open', function(){
  // here you have conn.id
  conn.send('hi!');
});
  
  
  res.write('Created and Connected Peer!');
  
  res.end();
  
  

}).listen(8082);
