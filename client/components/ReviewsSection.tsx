import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLang } from "@/context/LangContext";

type ReviewItem = {
  text: string;
  author: string;
  meta: string;
  verified: string;
  date: string;
  eta: string;
  txHash: string;
  txUrl: string;
  rating: number;
};

const translations = {
  EN: {
    heading: "Client proofs",
    subheading: "Recent exchanges with verification details.",
    reviews: [
      {
        text: "USDT to cash in Dubai was smooth. Rate matched the quote and support stayed online till completion.",
        author: "Alexey M.",
        meta: "Dubai • USDT → AED Cash",
        verified: "Verified client",
        date: "Apr 28, 2026",
        eta: "Completed in 18 min",
        txHash: "0xA7f3...92k1",
        txUrl: "https://etherscan.io/",
        rating: 5,
      },
      {
        text: "Large OTC transfer was executed exactly as agreed. Fast communication and no hidden steps.",
        author: "Anastasia K.",
        meta: "Miami • USDT → USD Cash",
        verified: "Verified client",
        date: "Apr 23, 2026",
        eta: "Completed in 22 min",
        txHash: "0x19cB...7Fd2",
        txUrl: "https://etherscan.io/",
        rating: 5,
      },
      {
        text: "First time exchange experience felt clear and safe. The team explained every step before execution.",
        author: "Dmitry R.",
        meta: "Paris • EUR Cash → USDT",
        verified: "Verified client",
        date: "Apr 19, 2026",
        eta: "Completed in 16 min",
        txHash: "0x5De4...A11f",
        txUrl: "https://etherscan.io/",
        rating: 5,
      },
    ] as ReviewItem[],
  },
  RU: {
    heading: "Подтвержденные сделки",
    subheading: "Последние обмены с деталями верификации.",
    reviews: [
      {
        text: "Обмен USDT на наличные в Дубае прошел быстро. Курс совпал с заявкой, поддержка была на связи до завершения.",
        author: "Алексей М.",
        meta: "Dubai • USDT → AED наличные",
        verified: "Проверенный клиент",
        date: "28 апр 2026",
        eta: "Завершено за 18 минут",
        txHash: "0xA7f3...92k1",
        txUrl: "https://etherscan.io/",
        rating: 5,
      },
      {
        text: "Крупный OTC-обмен провели точно по договоренности. Быстрая коммуникация и без скрытых этапов.",
        author: "Анастасия К.",
        meta: "Miami • USDT → USD наличные",
        verified: "Проверенный клиент",
        date: "23 апр 2026",
        eta: "Завершено за 22 минуты",
        txHash: "0x19cB...7Fd2",
        txUrl: "https://etherscan.io/",
        rating: 5,
      },
      {
        text: "Первый обмен прошел понятно и спокойно. Команда заранее объяснила все шаги перед сделкой.",
        author: "Дмитрий Р.",
        meta: "Paris • EUR наличные → USDT",
        verified: "Проверенный клиент",
        date: "19 апр 2026",
        eta: "Завершено за 16 минут",
        txHash: "0x5De4...A11f",
        txUrl: "https://etherscan.io/",
        rating: 5,
      },
    ] as ReviewItem[],
  },
};

export default function ReviewsSection() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="relative isolate w-full py-14 md:py-24 overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[420px] md:w-[600px] h-[420px] md:h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(20,160,73,0.2) 0%, transparent 72%)",
          filter: "blur(90px)",
          transform: "translate(35%, -35%)",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-gilroy font-semibold text-white text-3xl md:text-5xl lg:text-[56px] leading-tight mb-4">
            {t.heading}
          </h2>
          <p className="font-montserrat text-[#E5E5E5] text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            {t.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-7">
          {t.reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ text, author, meta, verified, date, eta, txHash, txUrl, rating }: ReviewItem) {
  return (
    <div className="card-glass rounded-xl p-5 sm:p-6 md:p-7 flex flex-col gap-4 border border-[rgba(20,160,73,0.42)]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <Avatar className="h-10 w-10">
            <AvatarFallback>{author.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="text-white font-montserrat text-sm sm:text-base truncate">{author}</p>
            <p className="text-[#CFCFCF] text-xs">{date}</p>
          </div>
        </div>
        <Stars rating={rating} />
      </div>

      <p className="font-montserrat text-white text-sm sm:text-base leading-relaxed">{text}</p>

      <div className="mt-auto space-y-1">
        <p className="text-[#CFCFCF] text-xs sm:text-sm">{meta}</p>
        <p className="text-[#CFCFCF] text-xs sm:text-sm">{eta}</p>

        <a
          href={txUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-brand-green text-xs sm:text-sm hover:underline break-all"
        >
          TX: {txHash}
        </a>
      </div>

      <div>
        <span className="inline-flex items-center rounded-full bg-[rgba(20,160,73,0.16)] border border-[rgba(20,160,73,0.45)] px-3 py-1 text-[11px] sm:text-xs text-[#D6F5DE] font-montserrat">
          {verified}
        </span>
      </div>
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} className="text-[#D2AB67] text-sm leading-none">
          ★
        </span>
      ))}
    </div>
  );
}
