import React from 'react';
import FaqSection from '../components/FaqSection';
import AccoladesSection from '../components/AccoladesSection';
import LeadForm from '../components/LeadForm';
import Testimonials from '../components/Testimonials';

export default function VacationAndPropertyRentalPage() {
  return (
    <main className="flex-1 pt-[100px]">
      <section className="bg-mm-gray-light py-12 lg:py-16 -mt-12 relative flex items-center justify-center">
        <div className="absolute inset-0 z-10 bg-black/40"></div>
        <div className="absolute inset-0">
          <picture>
            <source srcSet="https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/banner_desktop_1x_/public/2025-05/Couple-on-Vacation_0.jpg.webp" media="(min-width: 768px)" />
            <img src="https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/banner_mobile_1x/public/2025-05/Couple-on-Vacation_0.jpg.webp" alt="Couple on Vacation" className="w-full h-full object-cover" />
          </picture>
        </div>

        <div className="relative z-20 w-full max-w-[1252px] mx-auto px-8 flex items-center min-h-[350px] lg:min-h-[450px]">
          <div className="w-full md:w-3/4 lg:w-[55%] text-left pt-12 lg:pt-24">
            <h1 className="text-white text-[clamp(2.75rem,5.7508vw,4.5rem)] leading-[1.2] font-serif mb-[clamp(1rem,1.91693vw,2rem)] mt-0">
              Vacation and<br/> Rental Property<br/>Cleaning
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
              <a href="/cleaning-services" className="hover:text-mm-green-hover transition-colors font-light relative group pb-1">
                Cleaning Services
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-mm-green transition-all duration-200 group-hover:w-full"></div>
              </a>
            </li>
            <li className="text-mm-text opacity-70">
              <svg className="w-2 h-2 inline-block mx-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M273 239c9.4 9.4 9.4 24.6 0 33.9L113 433c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l143-143L79 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L273 239z"></path></svg>
            </li>
            <li>
              <span className="font-bold">Vacation and Rental Property Cleaning</span>
            </li>
          </ol>
        </nav>
      </div>

      <section className="py-8 lg:py-16">
        <div className="max-w-[1252px] mx-auto px-8 flex flex-col md:flex-row gap-8 lg:gap-12 flex-wrap">
          <div className="w-full mb-0 lg:mb-4">
            <h2 className="text-[clamp(2.25rem,3.99361vw,3.125rem)] font-serif leading-[1.2] mt-0 mb-4">
              Rental cleaning services to fit your needs
            </h2>
          </div>
          
          <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-1.5rem)]">
            <p className="mb-4">Specialty cleaning services are not available at all Merry Maids locations, so be sure to check with your local Merry Maids about this service. </p>
            <p className="mb-4">Love owning a rental property, Airbnb, or Vrbo for the extra income...but not for the cleaning chores? Don’t stress – leave the cleaning to the professionals at Merry Maids! Whether you need a one-time detailed clean or recurring cleaning service between guests, we’ll handle the tidying so you can focus on providing the very best guest experience.</p>
            <p className="mb-4">We know your business relies heavily on 5-star reviews and repeat bookings, and cleanliness is an important part of those reviews. We’re here to make sure your getaway property will be spotless, serene, and welcoming for every new arrival!</p>
            <p className="mb-0">From a spacious lakefront property for a large extended family to a cozy mountain cottage for two, our professionals can make your rental property cleaning stress-free. Does your rental allow furry friends? No problem! We know all about cleaning up paw and nose prints, and we’re pros in pet hair removal and odor elimination. Whether your rentals withstand sand from the beach, dirty snow from the local ski hill, or mud from the hiking trail, we’re pros in vacation rental clean-up.  </p>
          </div>
          
          <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-1.5rem)]">
            <img src="https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/half_width_desktop_1x/public/2025-06/Team-member-cleaning-fridge-774.jpg.webp" alt="Merry Maids team member cleaning fridge" className="w-[580px] h-auto max-w-full object-cover ml-0 md:ml-auto" />
          </div>
          
          <div className="w-full mt-4 lg:mt-8">
            <h2 className="text-[clamp(2.25rem,3.99361vw,3.125rem)] font-serif leading-[1.2] mt-0 mb-4">
              Tailored services for your rental property, Airbnb, or Vrbo
            </h2>
            <div className="text-[1rem] leading-relaxed">
              <p className="mb-4">Owning a rental, Airbnb, or Vrbo means you need a reliable service and a quick turnover. Your business depends on it! At Merry Maids, you can take advantage of our customizable services and flexible scheduling. We'll review the options during your free estimate and craft a customized cleaning plan for you.  </p>
              <p className="mb-4">Here's what's included in our standard rental cleaning services: </p>
              <ul className="list-disc pl-8 mb-4 space-y-[clamp(0.5rem,0.958466vw,1rem)]">
                <li><a href="/our-process/kitchen-cleaning" className="text-mm-green-dark underline hover:bg-mm-green hover:text-mm-black transition-colors decoration-2">Kitchen cleaning</a></li>
                <li><a href="/our-process/bathroom-cleaning" className="text-mm-green-dark underline hover:bg-mm-green hover:text-mm-black transition-colors decoration-2">Bathroom cleaning</a></li>
                <li>Bedroom cleaning </li>
                <li>Floor cleaning </li>
                <li>Dusting </li>
                <li>Disinfecting surfaces </li>
              </ul>
              <p className="mb-4">If you need detailed or <a href="/cleaning-services/deep-clean" className="text-mm-green-dark underline hover:bg-mm-green hover:text-mm-black transition-colors decoration-2">deep cleaning</a> - we've got you covered. We can: &nbsp;</p>
              <ul className="list-disc pl-8 mb-4 space-y-[clamp(0.5rem,0.958466vw,1rem)]">
                <li>Clean your appliance interiors </li>
                <li>Clean your cabinets and drawers (inside and out) </li>
              </ul>
              <p className="mb-4">With Merry Maids, you're not just getting just a quick tidy-up. Instead, you're investing in the kind of deep cleaning that may help you earn highly-rated reviews and keep those Airbnb and Vrbo bookings rolling in. Think of it as a fresh start for every guest, since your rental will always be ready for them to relax and unwind. </p>
              
              <h3 className="text-[clamp(1.875rem,2.8754vw,2.25rem)] font-serif leading-[1.2] mt-[clamp(1rem,1.91693vw,2rem)] mb-4">Why Merry Maids for your rental, Airbnb, or Vrbo cleaning? </h3>
              <ul className="list-disc pl-8 mb-4 space-y-[clamp(0.5rem,0.958466vw,1rem)]">
                <li>Thorough cleaning and disinfecting of high-touch surfaces between guests  </li>
                <li>Licensed, bonded, insured and professionally trained team members  </li>
                <li>Flexible scheduling and cleaning tailored to your needs </li>
                <li>Reliable and punctual arrival means so delay for your next guest check-in </li>
                <li>Save time and stress – leave the cleaning to the pros while you focus on what matters: making customers happy and earning great reviews </li>
              </ul>
              <p className="mb-0">Contact Merry Maids today to see how easy rental property cleaning can be! </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FaqSection />
      <AccoladesSection />
      <LeadForm />
    </main>
  );
}
