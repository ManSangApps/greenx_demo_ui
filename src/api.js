let socket;

export function connectWS(onMessage) {
  const WS_URL =
    location.protocol === "https:"
      ? "wss://greenx-backend.onrender.com/ws/nifty"
      : "ws://localhost:8000/ws/nifty";

  socket = new WebSocket(WS_URL);

  // socket = new WebSocket("wss://greenx-backend.onrender.com/ws/nifty");
  // socket = new WebSocket("ws://localhost:8000/ws/nifty");

  // socket = new WebSocket("ws://localhost:8000/ws");s

  socket.onmessage = (event) => {
    onMessage(JSON.parse(event.data));
  };
}
