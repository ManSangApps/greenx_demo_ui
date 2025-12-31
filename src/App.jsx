import { useEffect, useState } from "react";
import { connectWS } from "./api";

import Header from "./components/Header";
import LivePrice from "./components/LivePrice";
import ActiveTrade from "./components/ActiveTrade";
import TradeTable from "./components/TradeTable";

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    connectWS(setData);
    console.log("data", data);
  }, []);

  return (
    <div className="container">
      <Header />
      <LivePrice price={data.price} />
      <ActiveTrade trade={data.activeTrade} />
      <TradeTable trades={data.tradeHistory || []} />
    </div>
  );
}
