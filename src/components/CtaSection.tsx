import React from 'react';

export default function CtaSection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-[1252px] mx-auto px-8">
        <div className="flex flex-col md:flex-row shadow-lg">
          <div className="w-full md:w-1/2">
            <img src="https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/cta_1x/public/2025-06/family-kitchen-banner-cropped.jpg.webp" alt="Family around kitchen table" className="w-full h-full object-cover min-h-[300px]" />
          </div>
          <div className="w-full md:w-1/2 bg-[#d6e2cf] p-12 lg:p-16 flex flex-col justify-center items-center text-center">
            <h2 className="text-mm-black text-[clamp(2.25rem,3.99361vw,3.125rem)] font-serif leading-[1.2] mt-0 mb-4">
              <em><span>Clean,</span></em><br/><span> tailored to your lifestyle.</span>
            </h2>
            <p className="text-mm-black mb-8">
              Services tailored to you, so you can savor the moments that matter.
            </p>
            <a href="/home-cleaning-quote" className="inline-block px-6 py-3 bg-mm-green text-mm-black border-b-2 border-mm-green-dark rounded-full font-bold uppercase text-[1rem] tracking-wide hover:bg-mm-green-dark transition-colors duration-300">
              Request A Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
