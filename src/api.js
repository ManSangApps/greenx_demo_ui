let socket;

export function connectWS(onMessage) {
  socket = new WebSocket("ws://greenx-backend.onrender.com/ws/nifty");
  // socket = new WebSocket("ws://localhost:8000/ws/nifty");

  // socket = new WebSocket("ws://localhost:8000/ws");s

  socket.onmessage = (event) => {
    onMessage(JSON.parse(event.data));
  };
}
