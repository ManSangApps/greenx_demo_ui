let pollInterval;

export function connectData(onMessage) {
  const isProd = location.protocol === "https:";

  // 🔴 TEMP: Render free → REST polling
  if (isProd) {
    console.log("🟡 Using REST polling (Render free)");

    pollInterval = setInterval(async () => {
      try {
        const res = await fetch("https://greenx-backend.onrender.com/nifty");
        const data = await res.json();
        onMessage(data);
      } catch (e) {
        console.error("REST poll failed", e);
      }
    }, 2000);

    return;
  }

  // 🟢 Local → WebSocket
  console.log("🟢 Using WebSocket (local)");
  const ws = new WebSocket("ws://127.0.0.1:8000/ws/nifty");

  ws.onopen = () => console.log("✅ WS connected");
  ws.onmessage = (e) => onMessage(JSON.parse(e.data));
  ws.onerror = (e) => console.error("❌ WS error", e);
  ws.onclose = () => console.warn("⚠️ WS closed");
}
