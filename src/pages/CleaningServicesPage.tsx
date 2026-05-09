import React from 'react';
import FaqSection from '../components/FaqSection';
import AccoladesSection from '../components/AccoladesSection';
import LeadForm from '../components/LeadForm';

export default function CleaningServicesPage() {
  return (
    <main className="flex-1 pt-[100px]">
      <section className="bg-mm-gray-light py-12 lg:py-16 -mt-12 relative flex items-center justify-center">
        <div className="absolute inset-0 z-10 bg-black/40"></div>
        <div className="absolute inset-0">
          <picture>
            <source srcSet="https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/banner_desktop_1x_/public/2025-06/Mom-baby-book-sofa-2.jpg.webp" media="(min-width: 768px)" />
            <img src="https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/banner_mobile_1x/public/2025-06/Mom-baby-book-sofa-2.jpg.webp" alt="Mom on sofa with baby" className="w-full h-full object-cover" />
          </picture>
        </div>

        <div className="relative z-20 w-full max-w-[1252px] mx-auto px-8 flex items-center min-h-[350px] lg:min-h-[450px]">
          <div className="w-full md:w-3/4 lg:w-[55%] text-left pt-12 lg:pt-24">
            <h1 className="text-white text-[clamp(2.75rem,5.7508vw,4.5rem)] leading-[1.2] font-serif mb-[clamp(1rem,1.91693vw,2rem)] mt-0">
              Merry Maids<br/>Cleaning<br/>Services
            </h1>
            <div>
              <a href="/home-cleaning-quote" className="inline-block px-6 py-3 bg-mm-green text-mm-black border-b-2 border-mm-green-dark rounded-full font-bold uppercase text-[1rem] tracking-wide hover:bg-mm-green-dark transition-colors duration-300">
                Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1252px] mx-auto px-8 py-4 lg:py-8">
        <nav className="text-[0.875rem] text-mm-text">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="/" className="hover:text-mm-green-hover transition-colors font-light relative group pb-1">
                Home
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-mm-green transition-all duration-200 group-hover:w-full"></div>
              </a>
            </li>
            <li className="text-mm-text opacity-70">
              <svg className="w-2 h-2 inline-block mx-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M273 239c9.4 9.4 9.4 24.6 0 33.9L113 433c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l143-143L79 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L273 239z"></path></svg>
            </li>
            <li>
              <span className="font-bold">Cleaning Services</span>
            </li>
          </ol>
        </nav>
      </div>

      <section className="py-8 lg:py-16">
        <div className="max-w-[1252px] mx-auto px-8">
          <p className="mb-4">Your space should energize you, not exhaust you. Whether it's your home, your office, your rental, or the site of your latest renovation, the mess shouldn’t be your problem. With Merry Maids, it isn’t. We bring over 40 years of trusted experience, customizable plans, and detail-oriented professionals who treat your space like their own.</p>
          <p className="mb-0">From routine upkeep to <a href="/cleaning-services/post-construction" className="text-mm-green-dark underline hover:bg-mm-green hover:text-mm-black transition-colors decoration-2">post-construction cleanups</a>, event prep to move-in-ready finishes - we do it all. Plus, we do it with care, precision, and results that last longer than your stress ever should. Merry Maids has helped families, business owners, property managers, and professionals stop settling and start feeling in control.</p>
        </div>
      </section>

      <section className="py-8 lg:py-16">
        <div className="max-w-[1252px] mx-auto px-8 flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full md:w-1/2">
            <img src="https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/half_width_desktop_1x/public/2025-06/Team-member-dusting-coffee-table-fireplace-backgroun3.jpg.webp" alt="Merry Maids team member wiping table" className="w-[580px] h-auto max-w-full object-cover ml-auto" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-[clamp(2.25rem,3.99361vw,3.125rem)] font-serif leading-[1.2] mt-0 mb-4">Recurring Home Cleaning</h2>
            <p className="mb-6">Our customizable cleaning services create personalized plans tailored to your home's needs. We offer weekly, bi-weekly, or monthly options to fit your busy schedule. Our professionals handle dusting, vacuuming, appliances, bathrooms, and much more. Our more specialized services include cleaning of ovens, refrigerators, and kitchen cabinets. Have an upcoming special occasion or need a deep cleaning? Get your free cleaning quote today!</p>
            <a href="/cleaning-services/home" className="inline-block px-6 py-3 bg-transparent text-mm-black border-2 border-mm-green rounded-full font-bold uppercase text-[1rem] tracking-wide hover:bg-mm-green hover:border-mm-green transition-colors duration-300">
              Recurring Cleaning Services
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-16">
        <div className="max-w-[1252px] mx-auto px-8 flex flex-col-reverse md:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-[clamp(2.25rem,3.99361vw,3.125rem)] font-serif leading-[1.2] mt-0 mb-4">Vacation and rental property cleaning</h2>
            <p className="mb-6">Merry Maids offers professional cleaning services for rental properties, providing one-time or recurring cleanings to create a welcoming environment for guests. Your highly-rated reviews and repeat bookings will speak for themselves. The Merry Maids team is ready for a variety of cleaning challenges, including pet hair, odors, and debris from the beach, making your property maintenance stress-free.</p>
            <a href="/cleaning-services/vacation-and-property-rental" className="inline-block px-6 py-3 bg-transparent text-mm-black border-2 border-mm-green rounded-full font-bold uppercase text-[1rem] tracking-wide hover:bg-mm-green hover:border-mm-green transition-colors duration-300">
              Vacation and Rental Property Cleaning
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <img src="https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/half_width_desktop_1x/public/migrated/images/1746197176-390.jpg.webp" alt="Vacation Rental Cleaning Tips" className="w-[580px] h-auto max-w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-16">
        <div className="max-w-[1252px] mx-auto px-8 flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full md:w-1/2">
            <img src="https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/half_width_desktop_1x/public/migrated/images/1746196477-96.jpg.webp" alt="Woman working at home office with dog." className="w-[580px] h-auto max-w-full object-cover ml-auto" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-[clamp(2.25rem,3.99361vw,3.125rem)] font-serif leading-[1.2] mt-0 mb-4">Small business cleaning</h2>
            <p className="mb-6">We offer premium cleaning services, allowing business owners to focus on critical tasks - not maintaining a clean office environment. Our trained, bonded, and insured team ensures a spotless workplace that impresses customers and boosts employee satisfaction. We offer flexible options to suit your workplace schedule, for one-time deep cleans or recurring services.</p>
            <a href="/cleaning-services/small-business" className="inline-block px-6 py-3 bg-transparent text-mm-black border-2 border-mm-green rounded-full font-bold uppercase text-[1rem] tracking-wide hover:bg-mm-green hover:border-mm-green transition-colors duration-300">
              Business Cleaning Services
            </a>
          </div>
        </div>
      </section>

      <section className="bg-mm-gray-light py-16 lg:py-24">
        <div className="max-w-[1252px] mx-auto px-8 flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-[clamp(1.875rem,2.8754vw,2.25rem)] font-serif leading-[1.2] mt-0 mb-4 text-center">
              Step into the space you deserve
            </h3>
            <p className="mb-6 text-center">
              Your space should reflect the way you want your business to feel: calm, confident, and in control. That’s exactly what we deliver — with care, precision, and a personal touch.
            </p>
            <p className="mb-0 text-center">
              Our schedule fills quickly because we give every client the attention they deserve. Now’s the perfect time to start fresh and feel the difference.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src="https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/half_width_desktop_1x/public/2025-06/Team-Member-Cleaning-Kitchen-Island-3_1.jpg.webp" alt="Merry Maids team member wiping kitchen counter" className="w-[580px] h-auto max-w-full object-cover" />
          </div>
        </div>
      </section>

      <FaqSection />
      <AccoladesSection />
      <LeadForm />
    </main>
  );
}
