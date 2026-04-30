const features = [
  [
    { title: "Global presence", desc: "20+ locations around the world (Dubai, London, Paris, Miami, etc.)" },
    { title: "Large financial transactions", desc: "exchange from $10,000 with no upper limit" },
    { title: "Maximum speed", desc: "transaction processing up to 5 minutes, withdrawal in 10-15 minutes" },
    { title: "Low fees", desc: "from 0.1% on all transactions" },
    { title: "Confidentiality", desc: "guaranteed anonymity and protection of customer data" },
  ],
  [
    { title: "Safety", desc: "high-level asset and transaction protection" },
    { title: "High liquidity", desc: "exchange of more than 50 cryptocurrencies with large volumes" },
    { title: "Premium service", desc: "24/7 support in 10 languages" },
    { title: "Flexible conditions", desc: "Individual offers for VIP clients" },
    { title: "Reliability", desc: "98% positive feedback from users" },
  ],
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Bottom-right green glow */}
      <div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(20,160,73,0.35) 0%, transparent 70%)",
          filter: "blur(120px)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-gilroy font-semibold text-white text-3xl md:text-5xl lg:text-[56px] leading-tight mb-4">
            Why choose us
          </h2>
          <p className="font-montserrat text-[#E5E5E5] text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            By choosing us, you get a reliable partner in the world of cryptocurrencies. Join us and start
            exchanging cryptocurrency with confidence
          </p>
        </div>

        {/* Features Grid */}
        <FeaturesGrid />
      </div>
    </section>
  );
}

function FeaturesGrid() {
  return (
    <div className="relative">
      {/* Row 1 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l"
        style={{ borderColor: "rgba(20,160,73,0.3)" }}>
        {features[0].map((f, i) => (
          <FeatureCell key={i} title={f.title} desc={f.desc} isLastInRow={i === 4} rowIndex={0} />
        ))}
      </div>

      {/* Gradient divider between rows */}
      <div
        className="w-full h-px"
        style={{
          background: "linear-gradient(135deg, #14A049 0%, #23372A 44.76%, #536A5C 100%)",
        }}
      />

      {/* Row 2 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-b border-l"
        style={{ borderColor: "rgba(20,160,73,0.3)" }}>
        {features[1].map((f, i) => (
          <FeatureCell key={i} title={f.title} desc={f.desc} isLastInRow={i === 4} rowIndex={1} />
        ))}
      </div>
    </div>
  );
}

function FeatureCell({
  title,
  desc,
  isLastInRow,
}: {
  title: string;
  desc: string;
  isLastInRow: boolean;
  rowIndex: number;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center px-4 py-8 md:py-10 border-r"
      style={{
        borderColor: isLastInRow ? "transparent" : "rgba(20,160,73,0.3)",
      }}
    >
      <h3 className="font-gilroy font-bold text-white text-base md:text-lg mb-2 leading-snug">
        {title}
      </h3>
      <p className="font-montserrat text-[#E5E5E5] text-xs md:text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
