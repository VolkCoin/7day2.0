export default function Header() {
  return (
    <header className="relative w-full flex items-center justify-between pl-8 md:pl-16 pr-8 md:pr-16 py-10 md:py-16 z-50">
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

      {/* Logo - абсолютное центрирование */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/5b75acc1be8116f3461081d22abd1178065085fa?width=800"
          alt="7 DAY RATES"
          className="h-14 md:h-20 w-auto"
        />
      </div>

      {/* Пустой div для баланса */}
      <div className="w-10" />
    </header>
  );
}
