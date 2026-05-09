import React, { useState } from 'react';

const faqs = [
  {
    question: 'Can I ask for special requests or request focus on certain areas?',
    answer: 'Yes! We are happy to accommodate any special requests you may have. If parts of your home are especially cluttered or untidy, our team can spend their time just on those areas so that you get the best value for your money. Common special requests we receive include: de-griming baseboards, cleaning inside cabinets, removing pet hair from furniture, and de-cluttering closets.'
  },
  {
    question: 'How often should I schedule a deep cleaning service?',
    answer: 'For most homeowners, a one-time deep cleaning every 6 to 12 months is usually sufficient. If you aren\'t receiving regular cleaning on a weekly or bi-monthly basis, you may want to schedule cleanings more frequently.'
  },
  {
    question: 'Are your cleaners insured and bonded?',
    answer: 'Yes, all Merry Maids® cleaners are insured and bonded so you can feel secure in your home cleaning choice.'
  },
  {
    question: 'Are your cleaning products safe for pets and children?',
    answer: 'We know you strive to protect your kids’ and pets health and safety, and so do we! Merry Maids® uses environmentally friendly and pet-safe cleaning products.'
  },
  {
    question: 'What is the difference between Merry Maids and other cleaning companies?',
    answer: 'Merry Maids® does more than just take care of homes—we take care of people. We give you back the time you deserve so that you can focus on what matters most. We have 40 years of experience in professional home cleaning, which has allowed us to develop advanced, thorough processes that deliver unrivaled, worry-free results. That\'s our specialty. We clean hundreds of thousands of homes across the United States and Canada, and even in other countries like the United Kingdom and Japan. Our Merry Maids team understands the importance of earning and keeping your trust, which is why we clean thoroughly and efficiently while respecting your space. Our 5-Star Promise represents our commitment to ensuring premium customer satisfaction with every single cleaning.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-[1252px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[clamp(2.25rem,3.99361vw,3.125rem)] font-serif leading-[1.2] mt-0 mb-6 lg:mb-8">
              Here to <em>help</em>
            </h2>
            
            <div className="border-t border-mm-gray mb-8">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-mm-gray">
                  <button 
                    className="w-full text-left py-4 flex justify-between items-center text-[1rem] hover:text-mm-green-hover transition-colors font-sans"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    aria-expanded={openIndex === i}
                  >
                    <span>{faq.question}</span>
                    <span className="ml-4 text-xl">{openIndex === i ? '−' : '+'}</span>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-[500px] pb-4' : 'max-h-0'}`}
                    aria-hidden={openIndex !== i}
                  >
                    <p className="text-[1rem] m-0">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="/frequently-asked-questions" className="inline-block px-6 py-3 bg-transparent text-mm-black border-2 border-mm-green rounded-full font-bold uppercase text-[1rem] tracking-wide hover:bg-mm-green hover:border-mm-green transition-colors duration-300">
              All FAQs
            </a>
          </div>
          
          <div className="w-full lg:w-1/2">
            <img 
              src="https://public-smb-mm-brand.s3.amazonaws.com/mm-brand-main/public/styles/extra_large_650x650/public/2025-06/faq-block-team-member.png.webp" 
              alt="Cleaner fluffing pillows in living room" 
              className="w-[650px] h-[650px] max-w-full object-cover ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
