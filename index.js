import WebSocket, { WebSocketServer } from 'ws';

const PORT = 8080;

const wss = new WebSocketServer({ port: PORT, skipUTF8Validation: true });

wss.on('listening', () => {
  console.log(`Listening on port ${PORT}`);
});

wss.on('connection', function connection(ws) {
  console.log('Bitburner client connected');

  wss.clients.forEach(function each(client) {
    ws.on('message', function message(data, isBinary) {
      console.log(data.toString());
      console.log(isBinary);
    });
    console.log('send');
    client.send(
      JSON.stringify({
        jsonrpc: '2.0',
        id: 'toto',
        method: 'getFileNames',
        params: {
          server: 'home',
        },
      }),
    );

    // client.send(JSON.stringify({
    //   "jsonrpc": "2.0",
    //   "id": 1,
    //   "method": "getDefinitionFile"
    // }));
  });
});
