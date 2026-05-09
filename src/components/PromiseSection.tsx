import React from 'react';

export default function PromiseSection() {
  return (
    <section className="bg-mm-gray-light py-16 lg:py-24">
      <div className="max-w-[1252px] mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full md:w-1/2 text-center md:text-left md:pr-8">
            <h3 className="text-[clamp(1.875rem,2.8754vw,2.25rem)] font-serif leading-[1.2] mt-0 mb-4">
              We promise you’ll love our exceptional clean
            </h3>
            <p className="mb-6">
              Our 5-star Promise means delivering exceptional service in every interaction. We strive to anticipate your needs, exceed your expectations, and create a premium, memorable experience worthy of a 5-star rating. Our thousands of 5-star reviews and recurring customers demonstrate our commitment to your complete satisfaction.
            </p>
            <div className="text-center md:text-left">
              <a href="/reviews" className="inline-block px-6 py-3 bg-transparent text-mm-black border-2 border-mm-green rounded-full font-bold uppercase text-[1rem] tracking-wide hover:bg-mm-green hover:border-mm-green transition-colors duration-300">
                Read our reviews
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative flex justify-end">
            <div className="relative">
              <img src="https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/third_width_desktop_1x/public/2025-06/MM-team-member-entrance-yellow-lab-sq.png.webp" alt="Merry Maids team member greeted by pet." className="w-[370px] h-[370px] object-cover max-w-full" />
              <img src="https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/large/public/2025-06/5%20Star%20Promise.png.webp" alt="The Merry Maids five star promise." className="absolute -top-12 -right-12 w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
