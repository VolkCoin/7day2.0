export default function Header() {
  return (
    <header className="relative w-full flex items-center justify-between pl-8 md:pl-16 !pr-0 py-4 md:py-6 z-50">
      {/* Language Switcher */}
      <div className="flex items-center gap-2 cursor-pointer">
        <span className="font-gilroy font-bold text-xl md:text-2xl text-white uppercase tracking-wide">
          Eng
        </span>
        <div
          className="w-3 h-3 border-b-2 border-l-2 border-white"
          style={{ transform: "rotate(-45deg)" }}
        />
      </div>

      {/* Logo */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/5b75acc1be8116f3461081d22abd1178065085fa?width=346"
        alt="7 DAY RATES"
        className="h-14 md:h-20 w-auto flex-shrink-0"
      />

      {/* Telegram CTA - pill extending off right edge */}
      <div className="relative flex items-center">
        <a
          href="https://t.me/seven_day_rates"
          className="flex items-center gap-3 bg-white pl-4 pr-8 md:pr-12 py-2 shadow-xl"
          style={{ borderRadius: "50px 0 0 50px" }}
        >
          <TelegramIcon />
          <span className="hidden md:block font-montserrat font-semibold text-[#0A170B] text-sm">
            Telegram
          </span>
        </a>
      </div>
    </header>
  );
}

function TelegramIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M42 84C65.196 84 84 65.196 84 42C84 18.804 65.196 0 42 0C18.804 0 0 18.804 0 42C0 65.196 18.804 84 42 84Z"
        fill="url(#tg_header_grad)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0116 41.5567C31.2554 36.2222 39.4199 32.7054 43.505 31.0063C55.1689 26.1549 57.5925 25.3121 59.1722 25.2843C59.5197 25.2782 60.2965 25.3643 60.7997 25.7726C61.2246 26.1174 61.3415 26.5831 61.3975 26.91C61.4534 27.2369 61.5231 27.9816 61.4677 28.5634C60.8356 35.2046 58.1007 51.321 56.7093 58.7593C56.1205 61.9067 54.9613 62.962 53.839 63.0653C51.4 63.2897 49.5479 61.4534 47.1856 59.9049C43.489 57.4817 41.4007 55.9733 37.8126 53.6088C33.6659 50.8762 36.354 49.3743 38.7172 46.9198C39.3357 46.2774 50.082 36.5027 50.29 35.616C50.3161 35.5051 50.3402 35.0918 50.0946 34.8735C49.849 34.6552 49.4866 34.7298 49.225 34.7892C48.8543 34.8733 42.949 38.7765 31.5092 46.4987C29.833 47.6497 28.3147 48.2105 26.9544 48.1811C25.4548 48.1487 22.5702 47.3332 20.4257 46.6362C17.7955 45.7812 15.705 45.3291 15.887 43.8771C15.9818 43.1208 17.0234 42.3473 19.0116 41.5567Z"
        fill="white"
      />
      <defs>
        <linearGradient id="tg_header_grad" x1="42" y1="0" x2="42" y2="83.377" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2AABEE" />
          <stop offset="1" stopColor="#229ED9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
