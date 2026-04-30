import { useEffect, useState } from "react";

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
        const ids = "bitcoin,binancecoin,ethereum,solana,ripple";
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=" + ids + "&vs_currencies=usd&include_24hr_change=true"
        );
        const data = await res.json();

        const updated = [
          { id: "bitcoin", symbol: "BTC", icon: <BtcIcon /> },
          { id: "binancecoin", symbol: "BNB", icon: <BnbIcon /> },
          { id: "ethereum", symbol: "ETH", icon: <EthIcon /> },
          { id: "solana", symbol: "SOL", icon: <SolIcon /> },
          { id: "ripple", symbol: "XRP", icon: <XrpIcon /> },
        ].map((coin) => {
          const info = data[coin.id];
          const price = info?.usd ?? 0;
          const change = info?.usd_24h_change ?? 0;
          return {
            symbol: coin.symbol,
            icon: coin.icon,
            price: "$" + price.toLocaleString("en-US", { maximumFractionDigits: 2 }),
            change: (change >= 0 ? "+" : "") + change.toFixed(2) + "%",
            positive: change >= 0,
          };
        });

        setCryptos(updated);
      } catch (e) {
        // fallback
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
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

function BtcIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.09599 23.6407C15.526 25.2437 22.0374 21.3312 23.6409 14.9027C25.2436 8.47376 21.3308 1.96194 14.9016 0.359115C8.47383 -1.24371 1.96184 2.66928 0.35951 9.09842C-1.24432 15.5266 2.66868 22.0379 9.09599 23.6407ZM14.6496 7.30395C16.3121 7.87661 17.5281 8.73478 17.2893 10.3318C17.1165 11.5004 16.4681 12.0664 15.608 12.2648C16.7893 12.8799 17.3905 13.8231 16.8176 15.4581C16.1073 17.4886 14.4188 17.6599 12.1733 17.2352L11.6283 19.4189L10.3117 19.0907L10.8493 16.9364C10.508 16.8516 10.1593 16.7614 9.79966 16.6641L9.26016 18.8286L7.94499 18.5004L8.48949 16.3126C8.3763 16.2835 8.26237 16.2538 8.14768 16.2239C7.95096 16.1727 7.75203 16.1208 7.55083 16.0704L5.8375 15.6433L6.49083 14.1364C6.49083 14.1364 7.46149 14.3943 7.44833 14.3753C7.82099 14.4676 7.98649 14.2244 8.05183 14.0624L8.91282 10.6108C8.95152 10.6201 8.98936 10.6296 9.02556 10.6387L9.05182 10.6453C8.99916 10.6239 8.95166 10.6108 8.91499 10.6013L9.52916 8.13711C9.54516 7.85745 9.44899 7.50461 8.91566 7.37145C8.93633 7.35745 7.95949 7.13362 7.95949 7.13362L8.30983 5.72745L10.1255 6.18079L10.1242 6.18745C10.3973 6.25545 10.6785 6.31979 10.965 6.38512L11.5048 4.22246L12.8205 4.55062L12.292 6.67062C12.6455 6.75112 13.0006 6.83245 13.3471 6.91878L13.8723 4.81279L15.1888 5.14096L14.6496 7.30395ZM10.4848 15.1462C11.5595 15.4302 13.9074 16.0505 14.2811 14.5503C14.6635 13.016 12.3849 12.5051 11.274 12.2561C11.1501 12.2283 11.0407 12.2038 10.9512 12.1814L10.2282 15.0796C10.3018 15.0979 10.3882 15.1207 10.4848 15.1462ZM11.4979 10.911C12.3937 11.1501 14.3477 11.6717 14.6878 10.3083C15.0355 8.91396 13.1367 8.49347 12.2091 8.28807C12.1047 8.26494 12.0125 8.24454 11.9373 8.22578L11.282 10.8544C11.3439 10.8699 11.4165 10.8893 11.4979 10.911Z" fill="#EF8E1B" />
    </svg>
  );
}

function BnbIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <circle cx="15" cy="15" r="12" fill="white" />
      <path d="M12.0754 13.7984L15 10.8739L17.9259 13.7997L19.6276 12.098L15 7.47058L10.3739 12.0967L12.0755 13.7983L12.0754 13.7984ZM7.47058 15L9.17229 13.298L10.8739 14.9996L9.17217 16.7013L7.47058 15ZM12.0754 16.2017L15 19.1261L17.9259 16.2004L19.6284 17.9011L19.6276 17.902L15 22.5294L10.3739 17.9033L10.3715 17.9009L12.0756 16.2016L12.0754 16.2017ZM19.1261 15.0007L20.8278 13.299L22.5294 15.0006L20.8278 16.7023L19.1261 15.0007Z" fill="#F3BA2F" />
      <path d="M16.7255 14.9986H16.7262L14.9996 13.272L13.7234 14.5478L13.5768 14.6945L13.2744 14.9969L13.272 14.9993L13.2744 15.0017L14.9996 16.7271L16.7263 15.0005L16.7272 14.9995L16.7256 14.9986" fill="#F3BA2F" />
    </svg>
  );
}

function EthIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <circle cx="15" cy="15" r="12" fill="white" />
      <path d="M14.9991 6.88208L14.8917 7.2467V17.8261L14.9991 17.9332L19.9098 15.0304L14.9991 6.88208Z" fill="#343434" />
      <path d="M14.998 6.88208L10.0872 15.0304L14.998 17.9332V12.7983V6.88208Z" fill="#8C8C8C" />
      <path d="M14.9991 18.8634L14.9386 18.9372V22.7058L14.9991 22.8824L19.9129 15.9622L14.9991 18.8634Z" fill="#3C3C3B" />
      <path d="M14.998 22.8824V18.8634L10.0872 15.9622L14.998 22.8824Z" fill="#8C8C8C" />
      <path d="M15.001 17.9331L19.9117 15.0303L15.001 12.7981V17.9331Z" fill="#141414" />
      <path d="M10.0872 15.0303L14.998 17.9331V12.7981L10.0872 15.0303Z" fill="#393939" />
    </svg>
  );
}

function SolIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M15 27C21.6274 27 27 21.6274 27 15C27 8.37258 21.6274 3 15 3C8.37258 3 3 8.37258 3 15C3 21.6274 8.37258 27 15 27Z" fill="white" />
      <path d="M9.95026 17.9273C10.0359 17.8417 10.1536 17.7917 10.2785 17.7917H21.6025C21.8095 17.7917 21.9129 18.0415 21.7667 18.1878L19.5297 20.4247C19.4441 20.5104 19.3263 20.5603 19.2014 20.5603H7.8774C7.67047 20.5603 7.567 20.3106 7.71328 20.1643L9.95026 17.9273Z" fill="url(#sol_g1)" />
      <path d="M9.95026 9.57521C10.0395 9.48958 10.1572 9.43964 10.2785 9.43964H21.6025C21.8095 9.43964 21.9129 9.68938 21.7667 9.83566L19.5297 12.0726C19.4441 12.1583 19.3263 12.2082 19.2014 12.2082H7.8774C7.67047 12.2082 7.567 11.9585 7.71328 11.8122L9.95026 9.57521Z" fill="url(#sol_g2)" />
      <path d="M19.5297 13.7245C19.4441 13.6389 19.3263 13.5889 19.2014 13.5889H7.8774C7.67047 13.5889 7.567 13.8387 7.71328 13.9849L9.95026 16.2219C10.0359 16.3076 10.1536 16.3575 10.2785 16.3575H21.6025C21.8095 16.3575 21.9129 16.1078 21.7667 15.9615L19.5297 13.7245Z" fill="url(#sol_g3)" />
      <defs>
        <linearGradient id="sol_g1" x1="20.5208" y1="8.10332" x2="12.6836" y2="23.1146" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
        <linearGradient id="sol_g2" x1="17.0939" y1="6.31423" x2="9.2568" y2="21.3255" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
        <linearGradient id="sol_g3" x1="18.7964" y1="7.20308" x2="10.9593" y2="22.2144" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function XrpIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <circle cx="15" cy="15" r="12" fill="white" />
      <path d="M20.7991 8.2077H23.17L18.236 13.093C16.4491 14.8613 13.5522 14.8613 11.7641 13.093L6.82812 8.2077H9.20094L12.9495 11.9188C13.4957 12.4571 14.2317 12.7588 14.9986 12.7588C15.7654 12.7588 16.5015 12.4571 17.0476 11.9188L20.7991 8.2077Z" fill="#23292F" />
      <path d="M9.17047 21.7923H6.79797L11.764 16.8768C13.5509 15.1086 16.4478 15.1086 18.2359 16.8768L23.202 21.7923H20.8311L17.0505 18.0511C16.5043 17.5128 15.7683 17.211 15.0014 17.211C14.2346 17.211 13.4985 17.5128 12.9524 18.0511L9.17047 21.7923Z" fill="#23292F" />
    </svg>
  );
}
