import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-12 lg:py-16 overflow-hidden">
      <div className="max-w-[1252px] mx-auto px-8 text-center">
        <div className="relative max-w-4xl mx-auto">
          {/* Static testimonial representation since we don't have slick carousel implemented */}
          <div className="px-12 py-8">
            <p className="text-[1rem] md:text-lg mb-6 leading-relaxed">
              Nicole and Roger were an absolute delight to work with! They put their heart and soul into making sure that everything in my house was sparkling clean for my upcoming family guests. I felt that they really went above and beyond in doing a great job! Communication with the office was easy and efficient. I highly recommend Merry Maids to anyone who wants a good cleaning job done well!!
            </p>
            <div className="font-bold">
              <span>Kari S.</span>
            </div>
          </div>
          
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 text-mm-text hover:text-mm-green transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            <span className="sr-only">Previous</span>
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-mm-text hover:text-mm-green transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        
        <div className="mt-8">
          <a href="/reviews" className="inline-block px-6 py-3 bg-transparent text-mm-black border-2 border-mm-green rounded-full font-bold uppercase text-[1rem] tracking-wide hover:bg-mm-green hover:border-mm-green transition-colors duration-300">
            All Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
