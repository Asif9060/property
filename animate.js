const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Add motion import
code = code.replace(
  /import \{ useState \} from 'react';/,
  "import { useState } from 'react';\nimport { motion } from 'motion/react';"
);

// Replace HeroSearch
const heroOriginal = /\/\/ --- HERO SEARCH ---[\s\S]*?(?=\/\/ --- POPULAR REGIONS ---)/;
const heroNew = `// --- HERO SEARCH ---
function HeroSearch() {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'projects'>('buy');
  const [propertyType, setPropertyType] = useState<'homes' | 'plots' | 'commercial'>('homes');

  return (
    <div className="relative pt-32 pb-40 flex items-center min-h-[750px] overflow-hidden bg-[#E8E4D9]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4A5D4E_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text and Search */}
          <div className="flex-1 w-full flex flex-col items-start text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-serif font-light text-[#2D2D2D] mb-6 leading-tight tracking-tight"
            >
              Find your <span className="italic font-medium text-[#4A5D4E]">home</span><br className="hidden md:block"/> in Pakistan
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-lg md:text-xl text-[#6B6B6B] mb-10 max-w-2xl"
            >
              Search properties across Lahore, Karachi, and Islamabad. Your next dream home or investment is just a click away.
            </motion.p>

            {/* Search Widget */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full max-w-2xl bg-white/95 rounded-3xl shadow-2xl shadow-[#4A5D4E]/10 border border-white backdrop-blur-2xl p-2 md:p-3 overflow-hidden"
            >
              {/* Main Tabs */}
              <div className="flex border-b border-[#E5E1D8]">
                {['buy', 'rent', 'projects'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={\`flex-1 py-4 text-center font-semibold uppercase tracking-wider text-xs sm:text-sm transition-colors \${
                      activeTab === tab
                        ? 'text-[#4A5D4E] border-b-2 border-[#4A5D4E] bg-[#F0F2F0]/50'
                        : 'text-[#6B6B6B] hover:text-[#2D2D2D] hover:bg-[#F9F7F2]'
                    }\`}
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
                      className={\`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors whitespace-nowrap \${
                        propertyType === 'homes'
                          ? 'border-[#4A5D4E] bg-[#F0F2F0] text-[#4A5D4E]'
                          : 'border-[#E5E1D8] text-[#6B6B6B] hover:border-[#DED9CC]'
                      }\`}
                    >
                      <Home size={16} /> Homes
                    </button>
                    <button
                      onClick={() => setPropertyType('plots')}
                      className={\`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors whitespace-nowrap \${
                        propertyType === 'plots'
                          ? 'border-[#4A5D4E] bg-[#F0F2F0] text-[#4A5D4E]'
                          : 'border-[#E5E1D8] text-[#6B6B6B] hover:border-[#DED9CC]'
                      }\`}
                    >
                      <Map size={16} /> Plots
                    </button>
                    <button
                      onClick={() => setPropertyType('commercial')}
                      className={\`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors whitespace-nowrap \${
                        propertyType === 'commercial'
                          ? 'border-[#4A5D4E] bg-[#F0F2F0] text-[#4A5D4E]'
                          : 'border-[#E5E1D8] text-[#6B6B6B] hover:border-[#DED9CC]'
                      }\`}
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

                  <button className="bg-[#4A5D4E] hover:bg-[#3D4D41] text-white px-8 py-3 sm:py-4 rounded-2xl font-bold uppercase tracking-wide text-sm transition-all shadow-lg shadow-[#4A5D4E]/20 hover:-translate-y-0.5 flex items-center justify-center gap-2 md:w-auto w-full">
                    <Search size={20} />
                    <span className="hidden md:inline">Search</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex-1 w-full lg:max-w-[500px] xl:max-w-[600px] relative mt-10 lg:mt-0"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-[#4A5D4E]/10 relative z-10 border-8 border-white/50 backdrop-blur-sm">
              <Image
                src="https://picsum.photos/seed/estatevistahero1/800/1000"
                alt="Premium Property"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#F0F2F0] rounded-full blur-3xl opacity-50 -z-10"></div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

`;

code = code.replace(heroOriginal, heroNew);

// Add scroll animations to TopRegions
code = code.replace(
  /function TopRegions\(\) {[\s\S]*?return \([\s\S]*?<section className="py-28 bg-white">/,
  `function TopRegions() {
  const regions = [
    { title: 'Lahore', subtitle: 'DHA, Bahria Town, Raiwind Road', img: 'https://picsum.photos/seed/lahorepk/600/800' },
    { title: 'Karachi', subtitle: 'Scheme 33, Clifton, DHA Defence', img: 'https://picsum.photos/seed/karachipk/600/800' },
    { title: 'Islamabad', subtitle: 'Gulberg, B-17, DHA', img: 'https://picsum.photos/seed/islamabadpk/600/800' }
  ];

  return (
    <section className="py-28 bg-white overflow-hidden">`
);

// Top Regions header
code = code.replace(
  /<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">/,
  `<motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">`
);
code = code.replace(
  /<\/a>\n        <\/div>\n\n        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">/,
  `</a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">`
);

// Top Regions items
code = code.replace(
  /\{regions\.map\(\(region, idx\) => \(\n            <div key=\{idx\}/g,
  `{regions.map((region, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              key={idx}`
);

code = code.replace(
  /<\/p>\n              <\/div>\n            <\/div>\n          \)\)\}/g,
  `</p>
              </div>
            </motion.div>
          ))}`
);

// SpecializedTools
code = code.replace(
  /<div className="text-center max-w-2xl mx-auto mb-16">/,
  `<motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16">`
);
code = code.replace(
  /<\/p>\n        <\/div>\n\n        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">/,
  `</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">`
);

code = code.replace(
  /\{tools\.map\(\(tool, idx\) => \(\n            <div key=\{idx\}/g,
  `{tools.map((tool, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}`
);

code = code.replace(
  /<\/div>\n            <\/div>\n          \)\)\}/g,
  `</div>
            </motion.div>
          ))}`
);

// Featured projects
code = code.replace(
  /function FeaturedProjects\(\) {[\s\S]*?<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">/,
  `function FeaturedProjects() {
  const projects = [
    { title: 'Arx Residences', developer: 'Vista Developers', location: 'DHA Phase 8, Lahore', price: 'From Rs. 2.4 Crore', img: 'https://picsum.photos/seed/project1/800/600', tag: 'Selling Fast' },
    { title: 'Jade Towers', developer: 'Peak Construction Group', location: 'Bahria Town, Rawalpindi', price: 'From Rs. 1.8 Crore', img: 'https://picsum.photos/seed/project2/800/600', tag: 'New Launch' },
    { title: 'Akbar Heights', developer: 'Akbar Associates', location: 'Gulberg Greens, Islamabad', price: 'From Rs. 3.5 Crore', img: 'https://picsum.photos/seed/project3/800/600', tag: 'Premium' },
    { title: 'Clifton Bay Marina', developer: 'Oceanic Builders', location: 'Clifton, Karachi', price: 'From Rs. 5.1 Crore', img: 'https://picsum.photos/seed/project4/800/600', tag: 'Under Construction' },
  ];

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">`
);

code = code.replace(
  /<\/button>\n        <\/div>\n\n        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">/,
  `</button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">`
);

code = code.replace(
  /\{projects\.map\(\(proj, idx\) => \(\n            <div key=\{idx\}/g,
  `{projects.map((proj, idx) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}`
);

code = code.replace(
  /<\/button>\n                <\/div>\n              <\/div>\n            <\/div>\n          \)\)\}/g,
  `</button>
                </div>
              </div>
            </motion.div>
          ))}`
);

// Overseas Banner
code = code.replace(
  /<div className="bg-gradient-to-br/,
  `<motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br`
);

code = code.replace(
  /<\/button>\n          <\/div>\n        <\/div>\n      <\/div>/,
  `</button>
          </div>
        </motion.div>
      </div>`
);


fs.writeFileSync('app/page.tsx', code);
console.log("Updated animations.");
