import React, { FC } from 'react'

const Footer: FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-24 w-full bg-zinc-950 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col mb-0 w-full max-w-[1212px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start w-full font-medium max-md:max-w-full">
          <div className="flex flex-col text-white w-[257px]">
            <div className="flex gap-2.5 self-start text-3xl tracking-tighter whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9a888046b4f7492c3005f7787df854e489c7d0d091216d3f3f0190119853332?placeholderIfAbsent=true&apiKey=753046f5619446d39695f269a9043231"
                alt="7DAY Logo"
                className="object-contain shrink-0 w-10 aspect-square"
              />
              <div className="grow my-auto">7DAY</div>
            </div>
            <div className="mt-8 text-lg leading-7">
              Fast and secure crypto exchange service worldwide.
            </div>
          </div>
          <div className="flex gap-10 text-lg leading-loose text-white min-w-[240px]">
            <div className="flex flex-col flex-1 shrink-0 whitespace-nowrap basis-0">
              <div className="text-xl font-semibold text-stone-300">Company</div>
              <div className="mt-8 cursor-pointer">About</div>
              <div className="mt-4 cursor-pointer">Rates</div>
              <div className="mt-4 cursor-pointer">Services</div>
            </div>
            <div className="flex flex-col flex-1 shrink-0 basis-0">
              <div className="text-xl font-semibold text-stone-300">Support</div>
              <div className="mt-8 cursor-pointer">Help Center</div>
              <div className="mt-4 cursor-pointer">Contact Us</div>
              <div className="mt-4 cursor-pointer">FAQ</div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between mt-24 w-full text-lg leading-loose text-white max-md:mt-10 max-md:max-w-full">
          <div className="opacity-60">© 2026 7DAY. All rights reserved.</div>
          <div className="flex gap-8 whitespace-nowrap">
            <div className="opacity-60 cursor-pointer">Privacy</div>
            <div className="opacity-60 cursor-pointer">Terms</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
