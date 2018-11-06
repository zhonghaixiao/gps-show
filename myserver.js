let net = require('net');

let host = '192.168.1.24';
let port = 2000;

let observer;

net.createServer(function(sock){
  console.log('CONNECTED: ' + sock.remoteAddress +
    ":" + sock.remotePort);

  let temp;
  let start = false;
  let gpllBuf = '';

  sock.on('data', function(data){

    let gps_data = data.toString('ascii');

    if(gps_data.indexOf("$GPGLL") > -1){
      start = true;
      gpllBuf = gpllBuf.concat(gps_data.slice(gps_data.indexOf("$GPGLL")));
      console.log("start = " + start + "\n--->" + gpllBuf);
    }

    if(start === true){
      if(gps_data.indexOf("A,A*") > -1){
        gpllBuf = gpllBuf.concat(
          gps_data.slice(0,gps_data.indexOf("A,A*") + 5)
        );
        start = false;
        console.log("gpllBuf: " + gpllBuf + "--end---");

        let temp = gpllBuf.split(',');
        let gpsInfo = [temp[1],temp[2],temp[3],temp[4],temp[5]];
        console.log(gpsInfo);

        if(typeof observer === "function"){
          observer(gpsInfo);
        }

        /*for(var observer of observers){
                    observer(gpsInfo);
                }*/

        gpllBuf = "";

      }else{
        gpllBuf = gpllBuf.concat(gps_data);
      }
    }

  });

  sock.on('close',function(data){
    console.log('CLOSEDD: ' + sock.remoteAddress + ' '
      + sock.remotePort);
  });

}).listen(port,host);

console.log('tcp server listening on ' + host + ':' + port
  + "  reading gps information");

const server = require('http').createServer();

const io = require('socket.io')(server, {
  path: '/test',
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});

server.listen(3000);

io.sockets.on('connection', function(socket){

  // observer = function(gps){
  //   console.log("gps: " + gps);
  //   socket.emit("gpsData",gps);
  // }

  while (true) {
    socket.emit("gpsData", 'hello!');
  }

});



























