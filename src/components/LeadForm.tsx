import React from 'react';

export default function LeadForm() {
  return (
    <section className="py-12 lg:py-16 flex justify-center">
      <div className="max-w-[1252px] w-full px-8">
        <div className="bg-[#d6e2cf] p-8 lg:p-16 text-center shadow-sm">
          <h2 className="text-mm-black text-[clamp(2.25rem,3.99361vw,3.125rem)] font-serif leading-[1.2] mt-0 mb-8 mx-auto max-w-2xl">
            Your spotless home starts with a free quote from Merry Maids!
          </h2>
          
          <form className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4 items-end" onSubmit={(e) => e.preventDefault()}>
            <div className="flex-1 w-full text-left">
              <label htmlFor="address" className="block text-mm-black font-bold uppercase text-[0.875em] mb-2 tracking-wide">
                Address*
              </label>
              <input 
                type="text" 
                id="address" 
                placeholder="Start typing to search" 
                className="w-full border-b border-mm-black bg-transparent py-3 focus:outline-none focus:border-mm-green text-[1rem] placeholder-mm-text placeholder:font-normal"
                required 
              />
            </div>
            <button 
              type="submit" 
              className="w-full md:w-auto px-8 py-3 bg-mm-green text-mm-black border-b-2 border-mm-green-dark rounded-full font-bold uppercase text-[1rem] tracking-wide hover:bg-mm-green-dark transition-colors duration-300"
            >
              Start my quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
