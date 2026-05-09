import React from 'react';

const services = [
  {
    image: 'https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/teaser/public/2025-06/Team-Member-Cleaning-Kitchen-Island-3.jpg.webp',
    title: 'Recurring cleaning',
    link: '/cleaning-services/home',
    text: 'We recommend our popular weekly or bi-weekly cleaning, perfect for maintaining a tidy home. Our routine cleaning includes dusting, vacuuming, bathroom cleaning, and kitchen cleaning. Our recurring services are ideal for busy people who don\'t have time to clean but appreciate the serenity and peace of mind of a clean house.'
  },
  {
    image: 'https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/teaser/public/2025-06/Merry-Maids-Bottles-4.jpg.webp',
    title: 'Detailed cleaning',
    link: '/cleaning-services/deep-clean',
    text: 'We\'ll reach those often-neglected areas like baseboards, inside appliances and ceiling fans. Our detailed cleaning services are perfect for move-ins/move-outs, seasonal tasks such as spring cleaning, and prior to special occasions such as an open house, holiday party or birthday gathering. Contact Merry Maids today and leave the details to us!'
  },
  {
    image: 'https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/teaser/public/2025-06/Extend-the-Lifespan-2_0.jpg.webp',
    title: 'Specialty cleaning',
    link: '/cleaning-services/specialty',
    text: 'Need your grimy appliances deep-cleaned? Want your walls washed before painting or a special occasion? Our specialized cleaning services have you covered. If your house has unique cleaning needs, this is your solution. We tailor our cleaning services to fit your specific needs, leaving your space ready for any event.'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-[1252px] mx-auto px-8">
        <h2 className="text-center text-[clamp(2.25rem,3.99361vw,3.125rem)] font-serif leading-[1.2] mt-0 mb-8 lg:mb-12">
          Cleaning services that meet your needs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="flex flex-col">
              <div className="w-full">
                <img src={service.image} alt={service.title} className="w-full h-auto object-cover aspect-[540/300]" />
              </div>
              <div className="p-6 bg-mm-gray-light flex-1 text-center border border-mm-gray border-t-0">
                <h3 className="font-serif text-[clamp(1.3125rem,1.91693vw,1.5rem)] leading-[1.2] mt-0 mb-4 font-bold">
                  <a href={service.link} className="text-mm-text relative decoration-mm-green-dark hover:decoration-2 hover:text-mm-green-hover transition-colors before:absolute before:-bottom-1 before:left-0 before:right-0 before:h-[2px] before:bg-mm-green before:w-0 hover:before:w-full before:transition-all before:duration-200">
                    {service.title}
                  </a>
                </h3>
                <p className="text-[1rem] leading-relaxed mb-0">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
