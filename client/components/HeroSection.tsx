export default function HeroSection() {
  return (
    <section className="relative w-full overflow-x-hidden min-h-[600px] md:min-h-[750px] lg:min-h-[850px]">
      {/* Green glow - top left */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(20,160,73,0.55) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Content container */}
      <div className="relative w-full pl-8 md:pl-16 flex items-center pt-6 pb-16 min-h-[600px] md:min-h-[750px] lg:min-h-[850px]">

        {/* Left: Text */}
        <div className="flex flex-col gap-4 lg:gap-6 z-10 w-[50%]">
          <h1
            className="font-gilroy font-black text-white uppercase"
            style={{ lineHeight: 1, fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            Crypto<br />Exchange
          </h1>
          <p
            className="font-montserrat font-medium text-brand-green uppercase tracking-[0.2em]"
            style={{ fontSize: "clamp(0.9rem, 2vw, 1.75rem)" }}
          >
            Fast Easy Safe
          </p>
        </div>

        {/* Right: Image - абсолютное позиционирование */}
        <div className="absolute right-0 top-0 bottom-0 w-[55%] md:w-[60%] flex items-center">
          <div
            className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
            style={{
              background: "linear-gradient(to top, #0A170B 0%, transparent 100%)",
            }}
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/91655a458e219928683fd76dd6f9d0f9738e4ffe?width=1697"
            alt="Crypto Exchange"
            className="w-full h-auto object-contain"
            style={{ transform: "rotate(3.4deg)" }}
          />
        </div>

      </div>
    </section>
  );
}
