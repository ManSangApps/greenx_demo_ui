export default function LivePrice({ price }) {
  return (
    <div className="card">
      <h3>Live Price</h3>
      <p className="price">{price ? `$${price}` : "--"}</p>
    </div>
  );
}
