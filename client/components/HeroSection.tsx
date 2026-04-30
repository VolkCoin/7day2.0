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
      <div className="relative max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col lg:flex-row items-center lg:items-start gap-8 pt-6 pb-16">

        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-4 lg:gap-6 z-10 min-w-0">
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

        {/* Right: Image */}
        <div className="relative flex-shrink-0 w-full max-w-[280px] md:max-w-[380px] lg:max-w-[480px] xl:max-w-[560px] flex items-center justify-center mr-4 lg:mr-8">
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
