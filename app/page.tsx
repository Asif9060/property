'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import {
  Search,
  MapPin,
  Home,
  Building2,
  Calculator,
  Map,
  TrendingUp,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Building,
  Landmark,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';

// --- NAVIGATION ---
function Navigation() {
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
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div className={`transition-all duration-500 bg-[#4A5D4E] flex items-center justify-center text-white ${
              isScrolled || isOpen ? 'w-10 h-10 rounded-xl' : 'w-11 h-11 rounded-[1.25rem] shadow-md shadow-[#4A5D4E]/20'
            }`}>
              <Building2 size={isScrolled || isOpen ? 20 : 22} />
            </div>
            <span className={`font-serif font-bold tracking-tighter text-[#4A5D4E] transition-all duration-500 ${
              isScrolled || isOpen ? 'text-2xl' : 'text-2xl'
            }`}>EstateVista</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-7 lg:space-x-10">
            <a href="#" className="text-[#2D2D2D] hover:text-[#4A5D4E] text-xs lg:text-sm uppercase tracking-wider font-bold transition-colors">Buy</a>
            <a href="#" className="text-[#2D2D2D] hover:text-[#4A5D4E] text-xs lg:text-sm uppercase tracking-wider font-bold transition-colors">Rent</a>
            <a href="#" className="text-[#2D2D2D] hover:text-[#4A5D4E] text-xs lg:text-sm uppercase tracking-wider font-bold transition-colors">Projects</a>
            <a href="#" className="text-[#2D2D2D] hover:text-[#4A5D4E] text-xs lg:text-sm uppercase tracking-wider font-bold transition-colors flex items-center gap-1">
              Tools <ChevronDown size={14} />
            </a>
            <a href="#" className="text-[#2D2D2D] hover:text-[#4A5D4E] text-xs lg:text-sm uppercase tracking-wider font-bold transition-colors">Agencies</a>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-4 lg:gap-5">
            <button className="text-[#2D2D2D] font-bold hover:text-[#4A5D4E] transition-colors text-xs lg:text-sm uppercase tracking-wider">Log In</button>
            <button className={`bg-[#4A5D4E] hover:bg-[#3D4D41] text-white font-bold uppercase tracking-wider text-[11px] lg:text-xs transition-all shadow-md shadow-[#4A5D4E]/20 hover:-translate-y-0.5 ${
                isScrolled || isOpen ? 'px-6 py-3 rounded-xl' : 'px-6 lg:px-7 py-3 rounded-full'
            }`}>
              Add Property
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`text-[#2D2D2D] p-2 transition-all duration-500 ${
              isScrolled || isOpen ? 'bg-transparent' : 'bg-white/80 rounded-full backdrop-blur-sm border border-white'
            }`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
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

// --- HERO SEARCH ---
function HeroSearch() {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'projects'>('buy');
  const [propertyType, setPropertyType] = useState<'homes' | 'plots' | 'commercial'>('homes');

  return (
    <div className="relative pt-32 pb-40 flex items-center min-h-[750px] overflow-hidden bg-[#E8E4D9]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
          alt="Modern Architecture"
          fill
          className="object-cover object-center"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F7F2]/60 via-[#E8E4D9]/40 to-[#E8E4D9]/90 backdrop-blur-[4px] shadow-[inset_0_0_80px_rgba(232,228,217,0.7)]">
          <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#4A5D4E_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-serif font-light text-[#2D2D2D] text-center mb-6 leading-tight tracking-tight"
        >
          Find your <span className="italic font-medium text-[#4A5D4E]">home</span><br className="hidden md:block"/> in Pakistan
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-lg md:text-xl text-[#6B6B6B] mb-10 text-center max-w-2xl"
        >
          Search properties across Lahore, Karachi, and Islamabad. Your next dream home or investment is just a click away.
        </motion.p>

        {/* Search Widget */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full bg-white/95 rounded-3xl shadow-2xl shadow-[#4A5D4E]/10 border border-white backdrop-blur-2xl p-2 md:p-3 overflow-hidden"
        >
          {/* Main Tabs */}
          <div className="flex border-b border-[#E5E1D8]">
            {['buy', 'rent', 'projects'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`flex-1 py-4 text-center font-semibold uppercase tracking-wider text-xs sm:text-sm transition-colors ${
                  activeTab === tab
                    ? 'text-[#4A5D4E] border-b-2 border-[#4A5D4E] bg-[#F0F2F0]/50'
                    : 'text-[#6B6B6B] hover:text-[#2D2D2D] hover:bg-[#F9F7F2]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-4 sm:p-5 lg:p-6">
            {/* Property Type Tabs (Sub-tabs) */}
            {activeTab !== 'projects' && (
              <div className="flex gap-2 sm:gap-4 mb-6 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <button
                  onClick={() => setPropertyType('homes')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors whitespace-nowrap ${
                    propertyType === 'homes'
                      ? 'border-[#4A5D4E] bg-[#F0F2F0] text-[#4A5D4E]'
                      : 'border-[#E5E1D8] text-[#6B6B6B] hover:border-[#DED9CC]'
                  }`}
                >
                  <Home size={16} /> Homes
                </button>
                <button
                  onClick={() => setPropertyType('plots')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors whitespace-nowrap ${
                    propertyType === 'plots'
                      ? 'border-[#4A5D4E] bg-[#F0F2F0] text-[#4A5D4E]'
                      : 'border-[#E5E1D8] text-[#6B6B6B] hover:border-[#DED9CC]'
                  }`}
                >
                  <Map size={16} /> Plots
                </button>
                <button
                  onClick={() => setPropertyType('commercial')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors whitespace-nowrap ${
                    propertyType === 'commercial'
                      ? 'border-[#4A5D4E] bg-[#F0F2F0] text-[#4A5D4E]'
                      : 'border-[#E5E1D8] text-[#6B6B6B] hover:border-[#DED9CC]'
                  }`}
                >
                  <Building size={16} /> Comm
                </button>
              </div>
            )}

            {/* Form Fields */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MapPin className="text-gray-400" size={20} />
                </div>
                <input
                  type="text"
                  placeholder="City, area..."
                  className="w-full pl-11 pr-4 py-3 sm:py-4 bg-[#F9F7F2] rounded-2xl border-transparent focus:border-[#4A5D4E]/30 focus:bg-white focus:ring-4 focus:ring-[#4A5D4E]/10 outline-none transition-all text-[#2D2D2D] placeholder:text-gray-400"
                />
              </div>

              <div className="hidden lg:flex w-48 relative">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-400 font-medium">Rs.</span>
                </div>
                <select className="w-full pl-11 pr-8 py-4 bg-[#F9F7F2] rounded-2xl border-transparent focus:border-[#4A5D4E]/30 focus:bg-white focus:ring-4 focus:ring-[#4A5D4E]/10 outline-none appearance-none text-[#2D2D2D] cursor-pointer">
                  <option value="">Price Range</option>
                  <option value="1">Under 1 Crore</option>
                  <option value="2">1 - 5 Crore</option>
                  <option value="3">5+ Crore</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <ChevronDown className="text-gray-400" size={16} />
                </div>
              </div>

              <button className="bg-[#4A5D4E] hover:bg-[#3D4D41] text-white px-8 py-3.5 sm:py-4 rounded-2xl font-bold uppercase tracking-wide text-sm transition-all shadow-lg shadow-[#4A5D4E]/20 hover:-translate-y-0.5 flex items-center justify-center gap-2 md:w-auto w-full">
                <Search size={20} />
                <span>Search</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// --- POPULAR REGIONS ---
function TopRegions() {
  const regions = [
    { title: 'Lahore', subtitle: 'DHA, Bahria Town, Raiwind Road', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80' },
    { title: 'Karachi', subtitle: 'Scheme 33, Clifton, DHA Defence', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
    { title: 'Islamabad', subtitle: 'Gulberg, B-17, DHA', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-[#2D2D2D] mb-2">Prime Destinations</h2>
            <p className="text-[#6B6B6B] text-lg">Explore the most sought-after real estate in Pakistan.</p>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-1 text-[#4A5D4E] font-medium hover:text-[#3D4D41] transition-colors">
            View all cities <ArrowRight size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {regions.map((region, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              key={idx} className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-lg shadow-[#4A5D4E]/5 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
              <Image 
                src={region.img} 
                alt={region.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/90 via-[#2D2D2D]/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="text-3xl font-serif font-light text-white mb-2">{region.title}</h3>
                <p className="text-slate-200 text-sm font-medium">{region.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- SPECIALIZED TOOLS ---
function SpecializedTools() {
  const tools = [
    {
      title: 'Construction Cost Calculator',
      description: 'Estimate your building costs based on plot size (e.g. 5 Marla) and material quality.',
      icon: <Calculator className="text-[#8B735B] w-8 h-8" />,
      bg: 'bg-[#8B735B]/10',
      border: 'border-[#8B735B]/20',
    },
    {
      title: 'Plot Finder',
      description: 'Access detailed society maps and view exact locations of residential or commercial plots.',
      icon: <Map className="text-[#4A5D4E] w-8 h-8" />,
      bg: 'bg-[#F0F2F0]',
      border: 'border-[#E5E1D8]',
    },
    {
      title: 'Property Trends & Index',
      description: 'Track real estate price fluctuations over time to identify profitable investment hotspots.',
      icon: <TrendingUp className="text-[#8B735B] w-8 h-8" />,
      bg: 'bg-[#8B735B]/10',
      border: 'border-[#8B735B]/20',
    },
    {
      title: 'Verified Agencies',
      description: 'Connect with Platinum & Titanium trusted real estate agents for secure transactions.',
      icon: <ShieldCheck className="text-[#8B735B] w-8 h-8" />,
      bg: 'bg-[#8B735B]/10',
      border: 'border-[#8B735B]/20',
    }
  ];

  return (
    <section className="py-32 bg-[#F9F7F2] border-y border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-[#2D2D2D] mb-4">Make Informed Decisions</h2>
          <p className="text-[#6B6B6B] text-lg">Powerful tools designed specifically for the Pakistani real estate market to help you invest with confidence.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx} className={`p-8 rounded-2xl border ${tool.border} bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col h-full`}>
              <div className={`w-16 h-16 rounded-2xl ${tool.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {tool.icon}
              </div>
              <h3 className="text-xl font-serif font-medium tracking-tight text-[#2D2D2D] mb-3">{tool.title}</h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed flex-grow">{tool.description}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#2D2D2D] group-hover:text-[#4A5D4E] transition-colors">
                Explore Tool <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- FEATURED PROJECTS ---
function FeaturedProjects() {
  const projects = [
    { title: 'Arx Residences', developer: 'Vista Developers', location: 'DHA Phase 8, Lahore', price: 'From Rs. 2.4 Crore', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', tag: 'Selling Fast' },
    { title: 'Jade Towers', developer: 'Peak Construction Group', location: 'Bahria Town, Rawalpindi', price: 'From Rs. 1.8 Crore', img: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80', tag: 'New Launch' },
    { title: 'Akbar Heights', developer: 'Akbar Associates', location: 'Gulberg Greens, Islamabad', price: 'From Rs. 3.5 Crore', img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80', tag: 'Premium' },
    { title: 'Clifton Bay Marina', developer: 'Oceanic Builders', location: 'Clifton, Karachi', price: 'From Rs. 5.1 Crore', img: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&w=800&q=80', tag: 'Under Construction' },
  ];

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-[#2D2D2D] mb-2">Exclusive New Projects</h2>
            <p className="text-[#6B6B6B] text-lg">Secure your future by investing in premium upcoming developments.</p>
          </div>
          <button className="hidden sm:inline-flex px-5 py-2.5 border border-[#DED9CC] hover:border-slate-400 rounded-lg font-medium text-[#2D2D2D] transition-colors">
            View All Projects
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((proj, idx) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx} className="group border hover:border-transparent border-[#E5E1D8] rounded-[2rem] overflow-hidden hover:shadow-xl transition-shadow bg-white flex flex-col">
              <Link href={`/property/1`} className="flex flex-col h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={proj.img}
                    alt={proj.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#2D2D2D] text-xs font-bold px-3 py-1.5 rounded-md shadow-sm uppercase tracking-wide">
                      {proj.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-medium tracking-tight text-[#2D2D2D] mb-1 leading-tight">{proj.title}</h3>
                    <p className="text-[#6B6B6B] text-sm mb-3">by {proj.developer}</p>
                    <div className="flex items-center gap-1.5 text-[#6B6B6B] text-sm mb-4">
                      <MapPin size={14} className="text-gray-400" /> {proj.location}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-[#E5E1D8] flex items-center justify-between">
                    <span className="text-[#4A5D4E] font-bold">{proj.price}</span>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F9F7F2] text-[#6B6B6B] hover:bg-[#F0F2F0] hover:text-[#4A5D4E] transition-colors">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- TESTIMONIALS ---
function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Ali",
      location: "Lahore",
      text: "Finding a property through EstateVista was a breeze. Their specific filters and clear pricing helped me zero in on my dream home in DHA within weeks.",
      rating: 5,
      role: "Homeowner",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Sara Khan",
      location: "Islamabad",
      text: "As an overseas Pakistani, I was worried about investing, but the platform's trusted projects section gave me the confidence to buy a plot in Gulberg Greens.",
      rating: 5,
      role: "Investor",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Usman Tariq",
      location: "Karachi",
      text: "EstateVista's rent calculators and verified listings saved me from dealing with endless unreliable brokers. Highly recommend it to anyone in Karachi.",
      rating: 4,
      role: "Tenant",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "Aisha Rehman",
      location: "Rawalpindi",
      text: "The sheer volume of listings was amazing. I found exactly what I was looking for, well within my budget and close to my workplace.",
      rating: 5,
      role: "Homeowner",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-28 bg-[#F9F7F2] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8E4D9] text-[#4A5D4E] text-sm font-bold uppercase tracking-wider mb-6">
            <Star size={16} className="fill-[#4A5D4E]" />
            Client Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#2D2D2D] text-center mb-6">
            What our <span className="italic text-[#4A5D4E]">clients</span> say
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Controls */}
          <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 lg:-left-20 z-20">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg border border-[#E5E1D8] flex items-center justify-center text-[#2D2D2D] hover:bg-[#4A5D4E] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 lg:-right-20 z-20">
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg border border-[#E5E1D8] flex items-center justify-center text-[#2D2D2D] hover:bg-[#4A5D4E] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="overflow-hidden px-2 sm:px-4 py-8">
            <motion.div 
              className="flex items-stretch"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-[#4A5D4E]/5 border border-[#E5E1D8] relative h-full flex flex-col">
                    <Quote size={48} className="absolute top-8 right-8 text-[#E8E4D9] opacity-50" />
                    
                    <div className="flex gap-1 mb-6 text-[#D4AF37]">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="fill-current" />
                      ))}
                    </div>

                    <p className="text-xl md:text-2xl text-[#2D2D2D] mb-8 font-serif leading-relaxed flex-grow">
                      &quot;{testimonial.text}&quot;
                    </p>

                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-14 h-14 rounded-full overflow-hidden relative border border-[#E5E1D8]">
                        <Image
                          src={testimonial.img}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#2D2D2D] uppercase tracking-wider text-sm">{testimonial.name}</h4>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mt-0.5">{testimonial.role}, {testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/30 ${
                  currentIndex === idx ? "bg-[#4A5D4E] w-8" : "bg-[#DED9CC] hover:bg-[#C4BFB3]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// --- OVERSEAS SECTION ---
function OverseasBanner() {
  return (
    <section className="py-16 bg-[#E8E4D9] text-[#2D2D2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#E8E4D9] via-[#E8E4D9] to-[#DED9CC] rounded-[3rem] p-8 md:p-12 border border-[#DED9CC] flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F2F0]/20 text-[#8B735B] border border-[#8B735B]/30 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Star size={12} className="fill-[#8B735B]" /> Roshan Digital Account Support
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight mb-4 leading-tight">Overseas Pakistani? Invest Back Home Securely.</h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed">
              Expats and overseas Pakistanis can easily explore verified properties and safely process payments through supported Roshan Digital Accounts and verified Titanium Agencies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button className="bg-[#F0F2F0] hover:bg-[#E5E1D8] text-[#2D2D2D] font-bold px-8 py-4 rounded-xl transition-colors">
              Explore Expats Guide
            </button>
            <button className="bg-white hover:bg-[#F9F7F2] text-[#4A5D4E] border border-[#4A5D4E] font-medium px-8 py-4 rounded-xl transition-colors">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// --- FOOTER ---
function Footer() {
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

// --- MAIN PAGE LAYOUT ---
export default function Page() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] font-sans">
      <Navigation />
      
      <main>
        <HeroSearch />
        <TopRegions />
        <SpecializedTools />
        <FeaturedProjects />
        <Testimonials />
        <OverseasBanner />
      </main>
      
      <Footer />
    </div>
  );
}
