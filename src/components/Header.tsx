import React from 'react';
import { LocationIcon, PhoneIcon } from './Icons';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-mm-gray lg:min-h-[100px] flex flex-col lg:flex-row lg:justify-between lg:items-end px-4 lg:px-8">
      <div className="w-full lg:w-auto h-[72px] lg:h-auto flex items-center justify-between border-b lg:border-b-0 border-mm-gray">
        <a href="/" className="min-w-[100px] lg:min-w-[125px] xl:max-w-[200px] flex items-center lg:pb-6">
          <img src="https://merrymaids.com/themes/custom/mm_brand/logo.svg" alt="Merry Maids Logo" className="w-[100px] lg:w-auto" />
        </a>
        <button className="lg:hidden text-mm-text p-4">
          <span className="sr-only">Menu</span>
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>
          </svg>
        </button>
      </div>

      <div className="hidden lg:flex flex-col flex-1 justify-end h-full relative">
        <div className="absolute top-2 right-0 flex items-center space-x-8 text-[0.85rem]">
          <a href="/home-cleaners" className="flex items-center text-mm-text hover:text-mm-text relative group pb-1">
            <span className="w-[18px] h-[18px] mr-1 inline-block bg-[url('https://merrymaids.com/themes/custom/mm_brand/dist/images/location.svg')] bg-no-repeat bg-left bg-contain"></span>
            <span className="underline decoration-mm-green-dark group-hover:decoration-2">Find your local Merry Maids</span>
            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-mm-green transition-all duration-200 group-hover:w-full"></div>
          </a>
          <a href="tel:888.894.6174" className="flex items-center text-mm-text hover:text-mm-text relative group pb-1">
            <span className="w-[18px] h-[18px] mr-1 inline-block bg-[url('https://merrymaids.com/themes/custom/mm_brand/dist/images/phone.svg')] bg-no-repeat bg-left bg-contain"></span>
            <span className="font-bold underline decoration-mm-green-dark group-hover:decoration-2">888.894.6174</span>
            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-mm-green transition-all duration-200 group-hover:w-full"></div>
          </a>
        </div>

        <div className="flex items-center justify-end pb-6">
          <nav className="font-serif text-[21px]">
            <ul className="flex items-center space-x-8">
              <li className="relative group">
                <a href="/cleaning-services" className="flex items-center text-mm-text relative py-4 hover:text-mm-text">
                  Cleaning Services
                  <svg className="w-3 h-3 ml-2 fill-current transform transition-transform group-hover:rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M300.3 440.8C312.9 451 331.4 450.3 343.1 438.6L471.1 310.6C480.3 301.4 483 287.7 478 275.7C473 263.7 461.4 256 448.5 256L192.5 256C179.6 256 167.9 263.8 162.9 275.8C157.9 287.8 160.7 301.5 169.9 310.6L297.9 438.6L300.3 440.8z"/>
                  </svg>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-mm-green transition-all duration-200 group-hover:w-full"></div>
                </a>
                <div className="absolute top-full left-0 bg-white border border-mm-gray shadow-lg min-w-[250px] hidden group-hover:block z-50">
                  <ul className="py-2 font-sans font-light text-[1rem]">
                    <li><a href="/cleaning-services" className="block px-4 py-2 hover:text-mm-green-hover transition-colors">Our Services</a></li>
                    <li><a href="/cleaning-services/vacation-and-property-rental" className="block px-4 py-2 hover:text-mm-green-hover transition-colors">For Your Rental Property</a></li>
                  </ul>
                </div>
              </li>
              <li className="relative group">
                <a href="/why-hire-merry-maids" className="flex items-center text-mm-text relative py-4 hover:text-mm-text">
                  Why Hire Us?
                  <svg className="w-3 h-3 ml-2 fill-current transform transition-transform group-hover:rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M300.3 440.8C312.9 451 331.4 450.3 343.1 438.6L471.1 310.6C480.3 301.4 483 287.7 478 275.7C473 263.7 461.4 256 448.5 256L192.5 256C179.6 256 167.9 263.8 162.9 275.8C157.9 287.8 160.7 301.5 169.9 310.6L297.9 438.6L300.3 440.8z"/>
                  </svg>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-mm-green transition-all duration-200 group-hover:w-full"></div>
                </a>
              </li>
              <li className="relative group">
                <a href="#" className="flex items-center text-mm-text relative py-4 hover:text-mm-text">
                  Resources
                  <svg className="w-3 h-3 ml-2 fill-current transform transition-transform group-hover:rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M300.3 440.8C312.9 451 331.4 450.3 343.1 438.6L471.1 310.6C480.3 301.4 483 287.7 478 275.7C473 263.7 461.4 256 448.5 256L192.5 256C179.6 256 167.9 263.8 162.9 275.8C157.9 287.8 160.7 301.5 169.9 310.6L297.9 438.6L300.3 440.8z"/>
                  </svg>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-mm-green transition-all duration-200 group-hover:w-full"></div>
                </a>
              </li>
              <li className="relative group">
                <a href="https://app.yiftee.com/gifts/egift_and_gift_cards/merry-maids" className="flex items-center text-mm-text relative py-4 hover:text-mm-text" target="_blank" rel="noreferrer">
                  Gift Cards
                  <svg className="w-3 h-3 ml-2 fill-current" viewBox="0 0 10.4 10.4">
                    <g>
                      <path d="M9.7,0H6.6C6.3,0,6.1,0.2,6.1,0.5S6.3,1,6.6,1h2.1L3.1,6.6c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.4,0.1s0.3,0,0.4-0.1 l5.6-5.6v2.1c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5V0.7C10.4,0.3,10.1,0,9.7,0z"/>
                      <path d="M8.9,5.2c-0.3,0-0.5,0.2-0.5,0.5l0,3.7L1,9.4L1,2h3.7C5,2,5.2,1.8,5.2,1.5S5,1,4.7,1H1C0.5,1,0,1.5,0,2v7.4 c0,0.6,0.5,1,1,1h7.4c0.6,0,1-0.5,1-1V5.7C9.4,5.4,9.2,5.2,8.9,5.2z"/>
                    </g>
                  </svg>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-mm-green transition-all duration-200 group-hover:w-full"></div>
                </a>
              </li>
            </ul>
          </nav>
          
          <a href="/home-cleaning-quote" className="ml-8 px-6 py-3 bg-mm-green text-mm-black border-b-2 border-mm-green-dark rounded-full font-bold uppercase text-[1rem] tracking-wide hover:bg-mm-green-dark transition-colors duration-300">
            Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}
