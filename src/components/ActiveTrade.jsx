export default function ActiveTrade({ trade }) {
  if (!trade) {
    return <div className="card">No active trade</div>;
  }

  return (
    <div className="card">
      <h3>Active Trade</h3>
      <p>
        <b>Side:</b> {trade.side}
      </p>
      <p>
        <b>Entry:</b> {trade.entry}
      </p>
      <p>
        <b>SL:</b> {trade.sl}
      </p>
      <p>
        <b>Target:</b> {trade.target}
      </p>
      <p>
        <b>Unrealized PnL:</b> {trade.unrealized_pnl?.toFixed(2)}
      </p>
      <p>
        <b>Entry Time:</b> {new Date(trade.entry_time).toLocaleTimeString()}
      </p>
    </div>
  );
}
