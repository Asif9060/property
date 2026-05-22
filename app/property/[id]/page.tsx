'use client';

import { useParams } from 'next/navigation';
import { Navigation, Footer } from '@/components/Shared';
import { motion } from 'motion/react';
import Image from 'next/image';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Home, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Share2, 
  Heart,
  Calendar,
  Car
} from 'lucide-react';

export default function PropertyDetails() {
  const { id } = useParams();

  // Mock property data for development
  const property = {
    id,
    title: 'Modern Luxury Villa',
    location: 'DHA Phase 8, Lahore',
    price: 'Rs. 4.5 Crore',
    type: 'House',
    status: 'For Sale',
    beds: 4,
    baths: 5,
    area: '10 Marla',
    builtYear: '2023',
    parking: '2 Cars',
    description: `Experience unparalleled luxury in this impeccably designed 10 Marla modern villa. Located in the highly sought-after DHA Phase 8, this home offers a seamless blend of contemporary architecture and sophisticated interior finishes. 
    
    The open-concept living area boasts soaring ceilings and floor-to-ceiling windows that flood the space with natural light. The chef-inspired kitchen features custom cabinetry, state-of-the-art appliances, and a stunning center island perfect for entertaining.
    
    Upstairs, the master suite is a true sanctuary, complete with a private balcony, a walk-in closet, and a spa-like en-suite bathroom with a soaking tub and rainfall shower. Three additional generously sized bedrooms, each with their own baths, provide ample space for family and guests.`,
    features: [
      'Smart Home System',
      'Central Heating & Cooling',
      'Servant Quarter',
      'Double Glazed Windows',
      'Imported Fittings',
      'Security System',
      'Landscaped Garden',
      'Backup Generator'
    ],
    agent: {
      name: 'Hassan Ali',
      role: 'Senior Real Estate Consultant',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
      phone: '+92 300 1234567'
    },
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80'
    ]
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] font-sans text-[#2D2D2D]">
      <Navigation />

      <main className="pt-24 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-[#4A5D4E] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {property.status}
                </span>
                <span className="bg-[#F0F2F0] text-[#4A5D4E] border border-[#4A5D4E]/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {property.type}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#2D2D2D] mb-4">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-[#6B6B6B] font-medium">
                <MapPin size={18} className="text-[#4A5D4E]" />
                {property.location}
              </div>
            </div>
            <div className="text-left md:text-right w-full md:w-auto flex flex-row md:flex-col justify-between items-center md:items-end">
              <div className="text-3xl md:text-4xl font-serif font-bold text-[#4A5D4E] mb-0 md:mb-4">
                {property.price}
              </div>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full border border-[#DED9CC] flex items-center justify-center text-[#2D2D2D] hover:border-[#4A5D4E] hover:bg-[#F0F2F0] transition-colors">
                  <Share2 size={18} />
                </button>
                <button className="w-10 h-10 rounded-full border border-[#DED9CC] flex items-center justify-center text-[#2D2D2D] hover:border-[#4A5D4E] hover:text-red-500 hover:bg-[#F0F2F0] transition-colors">
                  <Heart size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Image Gallery Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 h-[400px] md:h-[600px] mb-12 rounded-3xl overflow-hidden"
          >
            <div className="col-span-1 md:col-span-2 row-span-2 relative drop-shadow-sm h-full group">
              <Image 
                src={property.images[0]} 
                alt="Main view" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                referrerPolicy="no-referrer"
              />
            </div>
            {property.images.slice(1, 5).map((img, idx) => (
              <div key={idx} className="relative hidden md:block h-full group overflow-hidden">
                <Image 
                  src={img} 
                  alt={`View ${idx + 1}`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Main Content */}
            <div className="flex-1">
              {/* Overview Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-white p-5 rounded-2xl border border-[#E5E1D8] shadow-sm flex flex-col items-center justify-center text-center">
                  <Bed size={24} className="text-[#4A5D4E] mb-2" />
                  <span className="text-xl font-bold text-[#2D2D2D]">{property.beds}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B]">Beds</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-[#E5E1D8] shadow-sm flex flex-col items-center justify-center text-center">
                  <Bath size={24} className="text-[#4A5D4E] mb-2" />
                  <span className="text-xl font-bold text-[#2D2D2D]">{property.baths}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B]">Baths</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-[#E5E1D8] shadow-sm flex flex-col items-center justify-center text-center">
                  <Square size={24} className="text-[#4A5D4E] mb-2" />
                  <span className="text-xl font-bold text-[#2D2D2D]">{property.area}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B]">Area</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-[#E5E1D8] shadow-sm flex flex-col items-center justify-center text-center">
                  <Car size={24} className="text-[#4A5D4E] mb-2" />
                  <span className="text-xl font-bold text-[#2D2D2D]">{property.parking}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B]">Parking</span>
                </div>
              </div>

              {/* Description */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-serif font-bold text-[#2D2D2D] mb-6">Property Description</h3>
                <div className="prose prose-lg prose-[#6B6B6B] max-w-none">
                  {property.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-[#4A4A4A] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Amenities */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-serif font-bold text-[#2D2D2D] mb-6">Features & Amenities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 bg-white p-8 rounded-3xl border border-[#E5E1D8] shadow-sm">
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-[#4A5D4E]" />
                      <span className="text-[#2D2D2D] font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-[380px] shrink-0">
              <div className="sticky top-28 space-y-6">
                
                {/* Agent Contact Card */}
                <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#E5E1D8] shadow-xl shadow-[#4A5D4E]/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-24 bg-[#4A5D4E]" />
                  <div className="relative z-10 flex flex-col items-center mt-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 group relative">
                      <Image 
                        src={property.agent.img}
                        alt={property.agent.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-[#2D2D2D]">{property.agent.name}</h4>
                    <p className="text-[#6B6B6B] font-medium text-sm mb-6">{property.agent.role}</p>

                    <div className="w-full space-y-3">
                      <button className="w-full flex items-center justify-center gap-2 bg-[#4A5D4E] hover:bg-[#3D4D41] text-white py-4 rounded-2xl font-bold uppercase tracking-wider text-xs transition-colors shadow-md">
                        <Phone size={16} />
                        {property.agent.phone}
                      </button>
                      <button className="w-full flex items-center justify-center gap-2 bg-transparent border-2 border-[#4A5D4E] text-[#4A5D4E] hover:bg-[#4A5D4E] hover:text-white py-4 rounded-2xl font-bold uppercase tracking-wider text-xs transition-colors">
                        <Mail size={16} />
                        Email Agent
                      </button>
                    </div>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="bg-[#F0F2F0] p-6 rounded-3xl border border-[#DED9CC]">
                  <h4 className="font-serif font-bold text-lg text-[#2D2D2D] mb-4">Property Overview</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-[#DED9CC] pb-3">
                      <span className="text-[#6B6B6B] flex items-center gap-2"><Home size={16} /> Type</span>
                      <span className="font-bold text-[#2D2D2D]">{property.type}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#DED9CC] pb-3">
                      <span className="text-[#6B6B6B] flex items-center gap-2"><Calendar size={16} /> Built Year</span>
                      <span className="font-bold text-[#2D2D2D]">{property.builtYear}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#6B6B6B] flex items-center gap-2"><MapPin size={16} /> City</span>
                      <span className="font-bold text-[#2D2D2D]">Lahore</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
