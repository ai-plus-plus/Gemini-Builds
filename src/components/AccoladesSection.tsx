import React from 'react';

export default function AccoladesSection() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-[1252px] mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 text-center md:text-left">
          <div className="w-full md:w-1/2">
            <h2 className="text-[clamp(2.25rem,3.99361vw,3.125rem)] font-serif leading-[1.2] mt-0 mb-4">
              Award-Worthy Clean
            </h2>
            <p className="text-[1rem] mb-0">
              Our expertly trained team members use advanced cleaning processes to ensure a consistent cleaning every time.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start gap-8 lg:gap-12">
            <img 
              src="https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/medium/public/2025-05/Womens-Choice.jpg.webp" 
              alt="Women's Choice Award" 
              className="w-[120px] lg:w-[150px] h-auto object-contain mix-blend-multiply"
            />
            <img 
              src="https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/medium/public/2025-05/consumer-affairs-1.png.webp" 
              alt="Consumer Affairs Accredited" 
              className="w-[100px] lg:w-[120px] h-auto object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
