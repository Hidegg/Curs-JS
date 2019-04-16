let win
    ws = new WebSocket('ws://' + window.location.hostname + ':40510'),
    form = document.getElementById('msg-form'),
    msg = document.getElementById('msg');

ws.addEventListener('open', () => {
    console.log('websocket is connected ...')
    ws.send('connected');
});

ws.addEventListener('message', (e) => {
    let matrix = JSON.parse(e.data);
    console.log(e);
    console.log(matrix);
    redraw(matrix);
});


/// code:
form.addEventListener('submit', (e) => {
    ws.send(msg.value);

    e.preventDefault();
});


function redraw(matrix) {
  console.log(matrix);
}
