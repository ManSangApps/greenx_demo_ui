export default function TradeTable({ trades }) {
  if (!trades.length) return null;

  return (
    <div className="card">
      <h3>Trade History</h3>
      <table>
        <thead>
          <tr>
            <th>Side</th>
            <th>Entry</th>
            <th>Exit</th>
            <th>PnL</th>
            <th>Status</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((t, i) => {
            const duration =
              t.exit_time && t.entry_time
                ? Math.round(
                    (new Date(t.exit_time) - new Date(t.entry_time)) / 1000
                  )
                : "-";

            return (
              <tr key={i}>
                <td>{t.side}</td>
                <td>{t.entry}</td>
                <td>{t.exit_price}</td>
                <td>{t.pnl.toFixed(2)}</td>
                <td>{t.status}</td>
                <td>{duration}s</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
