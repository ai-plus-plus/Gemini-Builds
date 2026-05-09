import React from 'react';

export default function LifeMadePossible() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-[1252px] mx-auto px-8">
        <div className="mb-8 lg:mb-12">
          <h2 className="text-center text-[clamp(2.25rem,3.99361vw,3.125rem)] font-serif leading-[1.2] mt-0 mb-4">
            <em><span>Life, </span></em><span>made possible with Merry Maids</span>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          <div className="w-full md:w-2/3">
            <p className="mb-4">
              Life’s too short to spend time cleaning the house! Between work, family, and trying to squeeze in a little fun, your to-do list is long, but your free time is in short supply. With Merry Maids you won't spend those rare unscheduled moments scrubbing showers.
            </p>
            <p className="mb-4">
              Merry Maids provides more than a sparkling clean home – for over 40 years we’ve been helping busy people like you take back your time, so you can focus on the things that truly matter – whether that’s spending time with your little ones, focusing on your career or enjoying a hobby. We understand that overwhelmed feeling, and we strive to make your life easier with free quotes, flexible scheduling, convenient communication options and cleaning services tailored to your unique needs.
            </p>
            <p className="mb-0">
              Stop spending your nights and weekends scrubbing sinks and mopping floors. Let Merry Maids take the burden off your shoulders—so you can finally enjoy your home, your time, and your life. Don’t wait another week to feel peace in your own space. 
            </p>
          </div>
          
          <div className="w-full md:w-1/3 flex justify-end">
            <picture>
              <source srcSet="https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/third_width_desktop_1x/public/2025-05/Family-in-Living-Room_0.jpg.webp" media="(min-width: 768px)" />
              <img src="https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/third_width_desktop_1x/public/2025-05/Family-in-Living-Room_0.jpg.webp" alt="Family in Living Room" className="w-[370px] h-[370px] max-w-full object-cover" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
