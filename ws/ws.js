const WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({
    port: 40510
  });

let matrix = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    let arr = data.split(','),
      row = arr[0],
      col = arr[1],
      value = Number(arr[2]);

    matrix[row][col] = value;

    client.send(JSON.stringify(matrix));
  });
};

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    if (message === 'connected') {
      console.log('Player connected');
      return;
    }

    console.log(message);
    wss.broadcast(message);
  });
});