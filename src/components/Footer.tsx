import React from 'react';

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/MerryMaids',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 320 512">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/merrymaidsofficial/',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
      </svg>
    )
  },
  {
    name: 'Pinterest',
    url: 'https://www.pinterest.com/merrymaids/',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 496 512">
        <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/>
      </svg>
    )
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/merrymaids',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 512 512">
        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.792 29.87 12.664 46.431 13.314-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.792-2.598-15.918-2.598-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
      </svg>
    )
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/user/merrymaids',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 576 512">
        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
      </svg>
    )
  }
];

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-mm-gray mt-auto">
      <div className="max-w-[1252px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between mb-16 gap-12">
          
          <div className="w-full lg:w-1/3">
            <a href="/">
              <img src="https://merrymaids.com/themes/custom/mm_brand/logo.svg" alt="Merry Maids" className="w-[180px] mb-8" />
            </a>
            
            <div className="flex items-center gap-2 text-[1rem] font-bold text-mm-text mb-6">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
              </svg>
              <a href="tel:888.894.6174" className="hover:text-mm-green-hover transition-colors">888.894.6174</a>
            </div>
            
            <ul className="flex items-center gap-4">
              {socialLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.url} target="_blank" rel="noreferrer" aria-label={link.name} className="text-mm-text hover:text-mm-green transition-colors inline-block">
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-12 lg:gap-24">
            <div className="w-full md:w-1/2">
              <h2 className="text-[1rem] uppercase font-bold text-mm-black mb-4 font-sans tracking-wide">
                Discover More
              </h2>
              <ul className="space-y-4">
                <li><a href="/frequently-asked-questions" className="text-mm-text hover:underline transition-colors hover:text-mm-green-hover decoration-mm-green-dark decoration-2 underline-offset-4">FAQs</a></li>
                <li><a href="/reviews" className="text-mm-text hover:underline transition-colors hover:text-mm-green-hover decoration-mm-green-dark decoration-2 underline-offset-4">Reviews</a></li>
                <li><a href="/cleaning-services/home-organization" className="text-mm-text hover:underline transition-colors hover:text-mm-green-hover decoration-mm-green-dark decoration-2 underline-offset-4">Home Organization</a></li>
                <li><a href="/home-cleaners" className="text-mm-text hover:underline transition-colors hover:text-mm-green-hover decoration-mm-green-dark decoration-2 underline-offset-4">Locations</a></li>
              </ul>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-[1rem] uppercase font-bold text-mm-black mb-4 font-sans tracking-wide">
                Helpful Links
              </h2>
              <ul className="space-y-4">
                <li><a href="/blog" className="text-mm-text hover:underline transition-colors hover:text-mm-green-hover decoration-mm-green-dark decoration-2 underline-offset-4">Blog</a></li>
                <li><a href="https://merrymaidscareers.careerplug.com/jobs" className="text-mm-text hover:underline transition-colors hover:text-mm-green-hover decoration-mm-green-dark decoration-2 underline-offset-4">Careers</a></li>
                <li><a href="https://franchise.merrymaids.com/" className="text-mm-text hover:underline transition-colors hover:text-mm-green-hover decoration-mm-green-dark decoration-2 underline-offset-4">Franchising</a></li>
                <li><a href="/contact-corporate" className="text-mm-text hover:underline transition-colors hover:text-mm-green-hover decoration-mm-green-dark decoration-2 underline-offset-4">Contact Corporate</a></li>
                <li><a href="/sitemap" className="text-mm-text hover:underline transition-colors hover:text-mm-green-hover decoration-mm-green-dark decoration-2 underline-offset-4">Sitemap</a></li>
              </ul>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-mm-gray pt-8 flex flex-col-reverse lg:flex-row justify-between items-center gap-8 text-[0.875rem] text-[#757575]">
          <div className="text-center lg:text-left">
            <p className="mb-2">©2026 Merry Maids SPC LLC | 1 Glenlake Parkway, Atlanta GA 30328 | All rights reserved.</p>
            <p className="mb-4">Merry Maids services are provided by independently owned and operated franchises. Prices and services vary by location.</p>
            <p className="space-x-2">
              <a href="/terms-of-use" className="hover:text-mm-green transition-colors">Terms of Use</a>
              <span>|</span>
              <a href="https://www.servicemaster.com/privacy-policy" className="hover:text-mm-green transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="https://www.servicemaster.com/accessibility-statement" className="hover:text-mm-green transition-colors">Accessibility</a>
              <span>|</span>
              <a href="/cookies" className="hover:text-mm-green transition-colors">Do Not Share/Sell My Info</a>
            </p>
          </div>
          
          <div className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-auto">
            <button className="px-6 py-2 border-2 border-mm-green text-mm-black font-bold uppercase rounded-full tracking-wide hover:bg-mm-green transition-colors">
              Region
            </button>
            <div className="text-mm-text opacity-50">
              A ServiceMaster Company
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
