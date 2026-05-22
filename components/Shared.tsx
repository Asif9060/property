'use client';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  Menu, 
  X, 
  ChevronDown,
  Facebook,
  Twitter,
  Instagram 
} from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 flex justify-center transition-all duration-500 ${
        isScrolled || isOpen ? 'px-0 pt-0' : 'px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8'
      }`}
    >
      <div 
        className={`w-full transition-all duration-500 flex flex-col ${
          isScrolled || isOpen
            ? 'max-w-full bg-white/95 backdrop-blur-xl border-b border-[#E5E1D8] shadow-sm py-3 px-4 sm:px-6 lg:px-8 rounded-none' 
            : 'max-w-[70rem] bg-white/80 backdrop-blur-lg shadow-xl shadow-[#4A5D4E]/10 border border-white p-2 pl-2 sm:pl-3 pr-2 sm:pr-3 rounded-full'
        }`}
      >
        <div className="flex justify-between items-center w-full transition-all duration-500">
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <Link href="/" className="flex items-center gap-3">
              <div className={`transition-all duration-500 bg-[#4A5D4E] flex items-center justify-center text-white ${
                isScrolled || isOpen ? 'w-10 h-10 rounded-xl' : 'w-11 h-11 rounded-[1.25rem] shadow-md shadow-[#4A5D4E]/20'
              }`}>
                <Building2 size={isScrolled || isOpen ? 20 : 22} />
              </div>
              <span className={`font-serif font-bold tracking-tighter text-[#4A5D4E] transition-all duration-500 ${
                isScrolled || isOpen ? 'text-2xl' : 'text-2xl'
              }`}>EstateVista</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-7 lg:space-x-10">
            <a href="#" className="text-[#2D2D2D] hover:text-[#4A5D4E] text-xs lg:text-sm uppercase tracking-wider font-bold transition-colors">Buy</a>
            <a href="#" className="text-[#2D2D2D] hover:text-[#4A5D4E] text-xs lg:text-sm uppercase tracking-wider font-bold transition-colors">Rent</a>
            <a href="#" className="text-[#2D2D2D] hover:text-[#4A5D4E] text-xs lg:text-sm uppercase tracking-wider font-bold transition-colors">Projects</a>
            <a href="#" className="text-[#2D2D2D] hover:text-[#4A5D4E] text-xs lg:text-sm uppercase tracking-wider font-bold transition-colors flex items-center gap-1">
              Tools <ChevronDown size={14} />
            </a>
            <a href="#" className="text-[#2D2D2D] hover:text-[#4A5D4E] text-xs lg:text-sm uppercase tracking-wider font-bold transition-colors">Agencies</a>
          </div>

          <div className="hidden md:flex items-center gap-4 lg:gap-5">
            <button className="text-[#2D2D2D] font-bold hover:text-[#4A5D4E] transition-colors text-xs lg:text-sm uppercase tracking-wider">Log In</button>
            <button className={`bg-[#4A5D4E] hover:bg-[#3D4D41] text-white font-bold uppercase tracking-wider text-[11px] lg:text-xs transition-all shadow-md shadow-[#4A5D4E]/20 hover:-translate-y-0.5 ${
                isScrolled || isOpen ? 'px-6 py-3 rounded-xl' : 'px-6 lg:px-7 py-3 rounded-full'
            }`}>
              Add Property
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`text-[#2D2D2D] p-2 transition-all duration-500 ${
              isScrolled || isOpen ? 'bg-transparent' : 'bg-white/80 rounded-full backdrop-blur-sm border border-white'
            }`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className={`py-4 space-y-2 mt-4 border-t border-[#E5E1D8]`}>
            <a href="#" className="block px-4 py-3 text-sm font-bold uppercase tracking-wider text-[#2D2D2D] hover:bg-[#F9F7F2] rounded-xl">Buy</a>
            <a href="#" className="block px-4 py-3 text-sm font-bold uppercase tracking-wider text-[#2D2D2D] hover:bg-[#F9F7F2] rounded-xl">Rent</a>
            <a href="#" className="block px-4 py-3 text-sm font-bold uppercase tracking-wider text-[#2D2D2D] hover:bg-[#F9F7F2] rounded-xl">Projects</a>
            <a href="#" className="block px-4 py-3 text-sm font-bold uppercase tracking-wider text-[#2D2D2D] hover:bg-[#F9F7F2] rounded-xl">Tools</a>
            <div className="pt-4 mt-2 flex flex-col gap-3 border-t border-[#E5E1D8]">
              <button className="w-full bg-[#F0F2F0] text-[#2D2D2D] px-5 py-4 rounded-2xl font-bold uppercase tracking-wider text-xs">Log In</button>
              <button className="w-full bg-[#4A5D4E] text-white px-5 py-4 rounded-2xl font-bold uppercase tracking-wider text-xs">Add Property</button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#F9F7F2] pt-28 pb-12 border-t border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#4A5D4E] rounded-lg flex items-center justify-center text-white">
                <Building2 size={18} />
              </div>
              <span className="font-serif font-bold text-xl text-[#4A5D4E] tracking-tight">EstateVista</span>
            </div>
            <p className="text-[#6B6B6B] mb-6 max-w-sm leading-relaxed">
              Pakistan&apos;s smartest approach to real estate. Discover, research, and invest in top-tier properties safely and effectively.
            </p>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-white border border-[#E5E1D8] flex items-center justify-center text-[#6B6B6B] hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm"><Facebook size={18} /></button>
              <button className="w-10 h-10 rounded-full bg-white border border-[#E5E1D8] flex items-center justify-center text-[#6B6B6B] hover:text-[#8B735B] hover:border-sky-200 transition-all shadow-sm"><Twitter size={18} /></button>
              <button className="w-10 h-10 rounded-full bg-white border border-[#E5E1D8] flex items-center justify-center text-[#6B6B6B] hover:text-pink-600 hover:border-pink-200 transition-all shadow-sm"><Instagram size={18} /></button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#2D2D2D] mb-5">Locations</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#4A5D4E] text-sm transition-colors">Properties in Lahore</a></li>
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#4A5D4E] text-sm transition-colors">Properties in Karachi</a></li>
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#4A5D4E] text-sm transition-colors">Properties in Islamabad</a></li>
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#4A5D4E] text-sm transition-colors">Properties in Rawalpindi</a></li>
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#4A5D4E] text-sm transition-colors">Properties in Peshawar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#2D2D2D] mb-5">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#4A5D4E] text-sm transition-colors">Homes for Sale</a></li>
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#4A5D4E] text-sm transition-colors">Flats for Rent</a></li>
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#4A5D4E] text-sm transition-colors">Plots & Land</a></li>
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#4A5D4E] text-sm transition-colors">Commercial Properties</a></li>
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#4A5D4E] text-sm transition-colors">New Projects Map</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#2D2D2D] mb-5">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#4A5D4E] text-sm transition-colors">Construction Cost Calculator</a></li>
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#4A5D4E] text-sm transition-colors">Home Loan Calculator</a></li>
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#4A5D4E] text-sm transition-colors">Property Price Index</a></li>
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#4A5D4E] text-sm transition-colors">Area Guides</a></li>
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#4A5D4E] text-sm transition-colors">Real Estate Forum</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E5E1D8] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6B6B6B] text-sm">
            &copy; {currentYear} EstateVista Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#6B6B6B] hover:text-[#2D2D2D] text-sm transition-colors">Terms of Use</a>
            <a href="#" className="text-[#6B6B6B] hover:text-[#2D2D2D] text-sm transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
