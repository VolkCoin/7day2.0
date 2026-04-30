import { useEffect, useState } from "react";

const COINS = [
  { id: "bitcoin", symbol: "BTC", icon: <BtcIcon /> },
  { id: "binancecoin", symbol: "BNB", icon: <BnbIcon /> },
  { id: "ethereum", symbol: "ETH", icon: <EthIcon /> },
  { id: "solana", symbol: "SOL", icon: <SolIcon /> },
  { id: "ripple", symbol: "XRP", icon: <XrpIcon /> },
];

type CryptoData = {
  symbol: string;
  price: string;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
};

export default function CryptoTicker() {
  const [cryptos, setCryptos] = useState<CryptoData[]>([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const ids = COINS.map((c) => c.id).join(",");
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=" + ids + "&vs_currencies=usd&include_24hr_change=true"
        );
        const data = await res.json();

        const updated = COINS.map((coin) => {
          const info = data[coin.id];
          const price = info?.usd ?? 0;
          const change = info?.usd_24h_change ?? 0;
          return {
            symbol: coin.symbol,
            icon: coin.icon,
            price: $${price.toLocaleString("en-US", { maximumFractionDigits: 2 })},
            change: ${change >= 0 ? "+" : ""}${change.toFixed(2)}%,
            positive: change >= 0,
          };
        });

        setCryptos(updated);
      } catch (e) {
        // fallback — оставляем пустым
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // обновление каждую минуту
    return () => clearInterval(interval);
  }, []);

  if (cryptos.length === 0) return null;

  const allCards = [...cryptos, ...cryptos, ...cryptos];

  return (
    <div className="w-full overflow-hidden py-4 relative">
      <div className="flex gap-5 animate-ticker" style={{ width: "max-content" }}>
        {allCards.map((crypto, i) => (
          <CryptoCard key={i} {...crypto} />
        ))}
      </div>
    </div>
  );
}

function CryptoCard({ symbol, price, change, positive, icon }: CryptoData) {
  return (
    <div className="flex-shrink-0 w-[260px] md:w-[280px] h-[150px] rounded-[10px] card-glass relative p-5 flex flex-col justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex-shrink-0">{icon}</div>
        <span className="font-gilroy font-bold text-white text-xl uppercase">{symbol}</span>
      </div>
      <div className="font-montserrat font-bold text-white text-xl uppercase">{price}</div>
      <div className="flex items-center gap-2">
        {positive ? <UpArrow /> : <DownArrow />}
        <span className="font-montserrat font-semibold text-base uppercase"
          style={{ color: positive ? "#19FF00" : "#FF3B30" }}>
          {change}
        </span>
      </div>
    </div>
  );
}

function UpArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M6.13397 2.5C6.51887 1.83333 7.48113 1.83333 7.86603 2.5L12.1962 10C12.5811 10.6667 12.0999 11.5 11.3301 11.5H2.66987C1.90007 11.5 1.41895 10.6667 1.80385 10L6.13397 2.5Z" fill="#19FF00" />
    </svg>
  );
}

function DownArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7.86603 11.5C7.48113 12.1667 6.51887 12.1667 6.13397 11.5L1.80385 4C1.41895 3.33333 1.90007 2.5 2.66987 2.5L11.3301 2.5C12.0999 2.5 12.5811 3.33333 12.1962 4L7.86603 11.5Z" fill="#FF3B30" />
    </svg>
  );
}

// Все иконки оставь как были (BtcIcon, BnbIcon, EthIcon, SolIcon, XrpIcon)
