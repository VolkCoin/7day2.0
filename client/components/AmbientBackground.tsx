export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(20,160,73,0.14),transparent_44%),radial-gradient(circle_at_80%_35%,rgba(42,171,238,0.08),transparent_40%),radial-gradient(circle_at_55%_85%,rgba(20,160,73,0.12),transparent_48%)]" />

      <div className="ambient-grid absolute inset-0 opacity-30" />

      <div className="ambient-blob ambient-blob--one" />
      <div className="ambient-blob ambient-blob--two" />
      <div className="ambient-blob ambient-blob--three" />

      <div className="ambient-coin ambient-coin--usdt">USDT · TRC20</div>
      <div className="ambient-coin ambient-coin--btc">BTC</div>
      <div className="ambient-coin ambient-coin--eth">ETH</div>
    </div>
  );
}
