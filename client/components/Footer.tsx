export default function Footer() {
  return (
    <footer
      className="w-full border-t py-12 md:py-16 lg:py-20"
      style={{ borderColor: "rgba(255,255,255,0.25)" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-8">
          {/* Left section: Team info + socials */}
          <div className="flex flex-col gap-8">
            {/* Team label */}
            <div>
              <p className="font-gilroy font-bold text-brand-gold text-xs md:text-sm uppercase tracking-wide letter-spacing-wide">
                7 Day Rates Team
              </p>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              <TelegramLink />
              <MailLink />
            </div>
          </div>

          {/* Right section: Logo + Legal */}
          <div className="flex flex-col items-start md:items-end gap-8">
            {/* Logo */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ded1aefa8b2ee5acb4b4494710ce46848326b456?width=346"
              alt="7 DAY RATES"
              className="h-12 md:h-16 w-auto"
            />

            {/* Links + Copyright */}
            <div className="w-full flex flex-col md:flex-row md:justify-between gap-4 items-start md:items-center text-xs md:text-sm text-[#BCBCBC] font-inter">
              <a href="#" className="hover:text-white transition-colors">
                Terms of Use & Privacy Policy
              </a>
              <span className="text-right w-full md:w-auto">©2025 7 DAY RATES. All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TelegramLink() {
  return (
    <a
      href="#"
      className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:opacity-80 transition-opacity"
    >
      <svg width="56" height="56" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M42 84C65.196 84 84 65.196 84 42C84 18.804 65.196 0 42 0C18.804 0 0 18.804 0 42C0 65.196 18.804 84 42 84Z"
          fill="url(#tg_grad)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.0116 41.5567C31.2554 36.2222 39.4199 32.7054 43.505 31.0063C55.1689 26.1549 57.5925 25.3121 59.1722 25.2843C59.5197 25.2782 60.2965 25.3643 60.7997 25.7726C61.2246 26.1174 61.3415 26.5831 61.3975 26.91C61.4534 27.2369 61.5231 27.9816 61.4677 28.5634C60.8356 35.2046 58.1007 51.321 56.7093 58.7593C56.1205 61.9067 54.9613 62.962 53.839 63.0653C51.4 63.2897 49.5479 61.4534 47.1856 59.9049C43.489 57.4817 41.4007 55.9733 37.8126 53.6088C33.6659 50.8762 36.354 49.3743 38.7172 46.9198C39.3357 46.2774 50.082 36.5027 50.29 35.616C50.3161 35.5051 50.3402 35.0918 50.0946 34.8735C49.849 34.6552 49.4866 34.7298 49.225 34.7892C48.8543 34.8733 42.949 38.7765 31.5092 46.4987C29.833 47.6497 28.3147 48.2105 26.9544 48.1811C25.4548 48.1487 22.5702 47.3332 20.4257 46.6362C17.7955 45.7812 15.705 45.3291 15.887 43.8771C15.9818 43.1208 17.0234 42.3473 19.0116 41.5567Z"
          fill="white"
        />
        <defs>
          <linearGradient id="tg_grad" x1="42" y1="0" x2="42" y2="83.377" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2AABEE" />
            <stop offset="1" stopColor="#229ED9" />
          </linearGradient>
        </defs>
      </svg>
    </a>
  );
}

function MailLink() {
  return (
    <a
      href="#"
      className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:opacity-80 transition-opacity"
    >
      <svg width="56" height="56" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M42 84C65.196 84 84 65.196 84 42C84 18.804 65.196 0 42 0C18.804 0 0 18.804 0 42C0 65.196 18.804 84 42 84Z"
          fill="url(#mail_grad)"
        />
        <path
          d="M23.1614 31.1053C22.512 33.5218 22.512 36.8555 22.512 42.0001C22.512 49.3076 22.512 52.9613 24.373 55.5227C24.974 56.3499 25.7014 57.0774 26.5286 57.6784C29.09 59.5393 32.7437 59.5393 40.0512 59.5393H43.9488C51.2563 59.5393 54.91 59.5393 57.4714 57.6784C58.2986 57.0774 59.026 56.3499 59.627 55.5227C61.488 52.9613 61.488 49.3076 61.488 42.0001C61.488 36.8383 61.488 33.4996 60.8321 31.0812L56.7342 35.1791C53.5533 38.36 51.0604 40.8529 48.8539 42.5364C46.5954 44.2596 44.4658 45.272 41.9997 45.272C39.5336 45.272 37.4041 44.2596 35.1456 42.5364C32.939 40.8529 30.4462 38.36 27.2652 35.179L23.455 31.3688L23.1614 31.1053Z"
          fill="white"
        />
        <path
          d="M24.4608 28.3585L24.6729 28.5341L25.4662 29.2459L29.2532 33.0329C32.5304 36.3101 34.8865 38.6619 36.9187 40.2124C38.9172 41.7372 40.4298 42.3488 41.9997 42.3488C43.5697 42.3488 45.0822 41.7372 47.0807 40.2124C49.113 38.6619 51.4691 36.3101 54.7463 33.0329L59.2439 28.5353L59.4887 28.2919C58.8877 27.4647 58.2986 26.9229 57.4714 26.3219C54.91 24.4609 51.2563 24.4609 43.9488 24.4609H40.0512C32.7437 24.4609 29.09 24.4609 26.5286 26.3219C25.7014 26.9229 25.0618 27.5313 24.4608 28.3585Z"
          fill="white"
        />
        <defs>
          <linearGradient id="mail_grad" x1="42" y1="0" x2="42" y2="83.377" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D2AB67" />
            <stop offset="1" stopColor="#D2AB67" />
          </linearGradient>
        </defs>
      </svg>
    </a>
  );
}
