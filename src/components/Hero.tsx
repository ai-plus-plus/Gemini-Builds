import React from 'react';

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[420px] lg:min-h-[520px] pb-12 lg:pb-16 -mt-12 bg-mm-gray-light">
      <div className="absolute inset-0 z-10 bg-black/40"></div>
      <div className="absolute inset-0">
        <picture>
          <source srcSet="https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/banner_desktop_1x_/public/2025-06/family-with-dog-living-room-banner.png.webp" media="(min-width: 768px)" />
          <img src="https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/banner_mobile_1x/public/2025-06/family-with-dog-living-room-banner.png.webp" alt="Family on couch with dog." className="w-full h-full object-cover" />
        </picture>
      </div>

      <div className="relative z-20 w-full max-w-[1252px] mx-auto px-8 flex items-center">
        <div className="w-full md:w-3/4 lg:w-[55%] text-left pt-24 lg:pt-32">
          <h1 className="text-white text-[clamp(2.75rem,5.7508vw,4.5rem)] leading-[1.2] font-serif mb-[clamp(1rem,1.91693vw,2rem)] mt-0">
            <em>Exceptional</em> Home Cleaning Services
          </h1>
          <div>
            <a href="/home-cleaning-quote" className="inline-block px-6 py-3 bg-mm-green text-mm-black border-b-2 border-mm-green-dark rounded-full font-bold uppercase text-[1rem] tracking-wide hover:bg-mm-green-dark transition-colors duration-300">
              Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
