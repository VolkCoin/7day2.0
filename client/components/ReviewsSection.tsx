import { useLang } from "@/context/LangContext";

type ReviewItem = {
  text: string;
  author: string;
  rating: number;
};

const translations = {
  EN: {
    heading: "Reviews",
    subheading:
      "We are proud that our clients trust us with their funds and choose our platform for cryptocurrency exchange. Here is what our users say about us:",
    reviews: [
      {
        text: "I have been using this service for several months now. Everything always goes smoothly, and the fees are pleasantly surprising. I recommend it to anyone looking for a reliable exchanger",
        author: "Olga Ionova",
        rating: 5,
      },
      {
        text: "Good platform with competitive rates. I exchanged several times and never had any problems. Support responds quickly, which is also a big plus.",
        author: "Nikolay Semenov",
        rating: 5,
      },
      {
        text: "I am new to the world of cryptocurrencies and this site has been a real find for me. The clear explanations made the exchange process simple and understandable. Thank you!",
        author: "Laura Ilarionova",
        rating: 5,
      },
    ] as ReviewItem[],
  },
  RU: {
    heading: "Отзывы",
    subheading:
      "Мы гордимся тем, что клиенты доверяют нам свои средства и выбирают нашу платформу для обмена криптовалют. Вот что говорят о нас пользователи:",
    reviews: [
      {
        text: "Пользуюсь этим сервисом уже несколько месяцев. Всё проходит быстро и без проблем, а комиссии приятно удивляют. Рекомендую всем, кто ищет надежный обменник.",
        author: "Ольга Ионова",
        rating: 5,
      },
      {
        text: "Хорошая платформа с выгодными курсами. Обменивал(а) несколько раз — ни разу не было проблем. Поддержка отвечает быстро, это большой плюс.",
        author: "Николай Семенов",
        rating: 5,
      },
      {
        text: "Я новичок в криптовалюте, и этот сайт стал для меня настоящей находкой. Понятные объяснения сделали процесс обмена простым и удобным. Спасибо!",
        author: "Лаура Иларионова",
        rating: 5,
      },
    ] as ReviewItem[],
  },
};

export default function ReviewsSection() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      <div
        className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(20,160,73,0.4) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-gilroy font-semibold text-white text-3xl md:text-5xl lg:text-[56px] leading-tight mb-4">{t.heading}</h2>
          <p className="font-montserrat text-[#E5E5E5] text-base md:text-lg lg:text-xl max-w-3xl mx-auto">{t.subheading}</p>
        </div>

        <div className="relative">
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
            {t.reviews.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>

          <div className="lg:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {t.reviews.map((review, i) => (
              <div key={i} className="flex-shrink-0 w-full sm:w-1/2 snap-start">
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ text, author, rating }: ReviewItem) {
  return (
    <div className="card-glass rounded-[10px] p-8 md:p-10 flex flex-col gap-6">
      <p className="font-montserrat text-white text-base md:text-lg leading-relaxed">{text}</p>
      <p className="font-space-grotesk font-normal text-brand-green text-lg md:text-xl leading-relaxed">{author}</p>
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} />
        ))}
      </div>
    </div>
  );
}

function Star() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
      <path
        d="M3.97199 0.148223C4.08791 -0.0494074 4.37362 -0.0494079 4.48954 0.148223L5.69366 2.2012C5.73619 2.27371 5.80718 2.32505 5.88936 2.34272L8.22436 2.84484C8.44978 2.89331 8.53853 3.16739 8.3843 3.33879L6.79469 5.10547C6.73806 5.1684 6.71066 5.25233 6.71925 5.33656L6.95978 7.69571C6.98308 7.9242 6.75147 8.09306 6.54106 8.00098L4.35104 7.04262C4.27437 7.00907 4.18717 7.00907 4.1105 7.04262L1.92047 8.00098C1.71006 8.09306 1.47845 7.9242 1.50175 7.69571L1.74228 5.33656C1.75087 5.25233 1.72347 5.1684 1.66684 5.10547L0.0772325 3.33879C-0.0769944 3.16739 0.0117509 2.89331 0.237175 2.84484L2.57217 2.34272C2.65435 2.32505 2.72534 2.27371 2.76787 2.2012L3.97199 0.148223Z"
        fill="#D2AB67"
      />
    </svg>
  );
}
