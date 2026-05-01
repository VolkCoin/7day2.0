import { useLang } from "@/context/LangContext";

type ReviewItem = {
  text: string;
  author: string;
  meta: string;
  verified: string;
  rating: number;
};

const translations = {
  EN: {
    heading: "Reviews",
    subheading:
      "Our clients trust us with large and small exchanges every day. Here are a few real-style impressions about speed, support, and reliability:",
    reviews: [
      {
        text: "I needed to exchange USDT to cash in Dubai on short notice. The manager confirmed the rate quickly, explained every step, and the whole deal was completed in under 20 minutes.",
        author: "Daniel M.",
        meta: "Dubai • USDT → Cash",
        verified: "Verified client",
        rating: 5,
      },
      {
        text: "What I value most is consistency. I’ve used this service multiple times for larger transfers, and the execution is always accurate. Support is responsive and professional.",
        author: "Emma K.",
        meta: "London • USDT → Bank transfer",
        verified: "Verified client",
        rating: 5,
      },
      {
        text: "As someone new to crypto exchange, I expected the process to be complicated. It wasn’t. The team explained timing and steps in plain language and stayed in touch throughout.",
        author: "Michael R.",
        meta: "Paris • USDT → Cash",
        verified: "Verified client",
        rating: 5,
      },
    ] as ReviewItem[],
  },
  RU: {
    heading: "Отзывы",
    subheading:
      "Нам доверяют как небольшие, так и крупные обмены каждый день. Вот несколько отзывов о скорости, поддержке и надежности сервиса:",
    reviews: [
      {
        text: "Нужно было срочно обменять USDT на наличные в Дубае. Менеджер быстро подтвердил курс, объяснил шаги, и сделку закрыли меньше чем за 20 минут.",
        author: "Даниил М.",
        meta: "Дубай • USDT → Наличные",
        verified: "Проверенный клиент",
        rating: 5,
      },
      {
        text: "Больше всего ценю стабильность. Обмениваю здесь не первый раз, в том числе крупные суммы — всё проходит четко. Поддержка отвечает быстро и по делу.",
        author: "Екатерина К.",
        meta: "Лондон • USDT → Банковский перевод",
        verified: "Проверенный клиент",
        rating: 5,
      },
      {
        text: "Я новичок в крипте и думал, что будет сложно. На практике всё оказалось понятно: объяснили сроки и этапы простым языком, менеджер был на связи до конца.",
        author: "Михаил Р.",
        meta: "Париж • USDT → Наличные",
        verified: "Проверенный клиент",
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

        <div className="relative">
          {/* Desktop */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
            {t.reviews.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="lg:hidden -mx-4 px-4 sm:-mx-6 sm:px-6 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {t.reviews.map((review, i) => (
              <div key={i} className="flex-shrink-0 w-[88%] sm:w-[62%] snap-start">
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ text, author, meta, verified, rating }: ReviewItem) {
  return (
    <div className="card-glass rounded-xl p-5 sm:p-7 md:p-9 flex flex-col gap-5 min-h-[290px] border border-[rgba(20,160,73,0.42)]">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center rounded-full bg-[rgba(20,160,73,0.16)] border border-[rgba(20,160,73,0.45)] px-3 py-1 text-[11px] sm:text-xs text-[#D6F5DE] font-montserrat">
          {verified}
        </span>
        <Stars rating={rating} />
      </div>

      <p className="font-montserrat text-white text-sm sm:text-base md:text-lg leading-relaxed">{text}</p>

      <div className="mt-auto">
        <p className="font-space-grotesk text-brand-green text-base sm:text-lg md:text-xl">{author}</p>
        <p className="font-montserrat text-[#CFCFCF] text-xs sm:text-sm mt-1">{meta}</p>
      </div>
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} width="9" height="9" viewBox="0 0 9 9" fill="none">
          <path
            d="M3.97199 0.148223C4.08791 -0.0494074 4.37362 -0.0494079 4.48954 0.148223L5.69366 2.2012C5.73619 2.27371 5.80718 2.32505 5.88936 2.34272L8.22436 2.84484C8.44978 2.89331 8.53853 3.16739 8.3843 3.33879L6.79469 5.10547C6.73806 5.1684 6.71066 5.25233 6.71925 5.33656L6.95978 7.69571C6.98308 7.9242 6.75147 8.09306 6.54106 8.00098L4.35104 7.04262C4.27437 7.00907 4.18717 7.00907 4.1105 7.04262L1.92047 8.00098C1.71006 8.09306 1.47845 7.9242 1.50175 7.69571L1.74228 5.33656C1.75087 5.25233 1.72347 5.1684 1.66684 5.10547L0.0772325 3.33879C-0.0769944 3.16739 0.0117509 2.89331 0.237175 2.84484L2.57217 2.34272C2.65435 2.32505 2.72534 2.27371 2.76787 2.2012L3.97199 0.148223Z"
            fill="#D2AB67"
          />
        </svg>
      ))}
    </div>
  );
}
