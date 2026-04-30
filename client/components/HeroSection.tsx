export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[600px] md:min-h-[750px] lg:min-h-[850px]">
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
        <div className="flex-1 flex flex-col gap-4 lg:gap-6 z-10 max-w-xl lg:max-w-none">
          <h1
          className="font-gilroy font-black text-white uppercase leading-none whitespace-nowrap text-[clamp(2rem,5vw,5rem)]"
          style={{ lineHeight: 1 }}
          >
          Crypto Exchange
          </h1>
          <p
            className="font-montserrat font-medium text-brand-green uppercase text-[clamp(1rem,2.5vw,2rem)] tracking-[0.2em]"
          >
            Fast Easy Safe
          </p>
        </div>

        {/* Right: Image */}
        <div className="relative flex-shrink-0 w-full max-w-[340px] md:max-w-[480px] lg:max-w-[600px] xl:max-w-[700px] flex items-center justify-center">
          {/* Dark shadow overlay at bottom of image */}
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
