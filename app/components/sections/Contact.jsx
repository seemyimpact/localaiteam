'use client';

import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="bg-white relative overflow-hidden py-16 md:py-20">

      
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">Get In Touch</h2>
          <p className="text-neutral-700 max-w-2xl mx-auto">
            Have questions about our AI solutions? We're here to help. Reach out to us using the information below.
          </p>
        </div>

        {/* Contact card with modern styling */}
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-[#71b1d1]/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left side - Map or image */}
            <div className="rounded-lg overflow-hidden h-full min-h-[250px] bg-[#71b1d1]/10 flex items-center justify-center">
              <div className="text-center p-6">
                <img 
                  src="/images/contact-illustration.svg" 
                  alt="Contact us" 
                  className="max-w-full h-auto mx-auto mb-4"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x300?text=Local+AI+Team';
                  }}
                />
                <h3 className="text-xl font-semibold text-[#71b1d1]">Local AI Team</h3>
                <p className="text-neutral-600">Your Partner in AI Innovation</p>
              </div>
            </div>
            
            {/* Right side - Contact information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-6 border-b border-[#71b1d1]/30 pb-2">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#71b1d1]/20 p-3 rounded-full mr-4 shadow-sm">
                    <HiOutlineMail className="text-[#71b1d1] h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1 text-neutral-800">Email Us</h4>
                    <a href="mailto:contact@localaiteam.com" className="text-[#71b1d1] hover:underline transition">contact@localaiteam.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#71b1d1]/20 p-3 rounded-full mr-4 shadow-sm">
                    <HiOutlinePhone className="text-[#71b1d1] h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1 text-neutral-800">Call Us</h4>
                    <a href="tel:+1234567890" className="text-neutral-600 hover:text-[#71b1d1] transition">(123) 456-7890</a>
                    <p className="text-sm text-neutral-500 mt-1">Monday-Friday, 9AM-5PM PST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#71b1d1]/20 p-3 rounded-full mr-4 shadow-sm">
                    <HiOutlineLocationMarker className="text-[#71b1d1] h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1 text-neutral-800">Visit Us</h4>
                    <p className="text-neutral-600">123 Tech Drive</p>
                    <p className="text-neutral-600">Your City, ST 12345</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-neutral-200">
                <h4 className="font-medium text-lg mb-3 text-neutral-800">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="h-10 w-10 rounded-full bg-[#71b1d1]/10 flex items-center justify-center text-[#71b1d1] hover:bg-[#71b1d1] hover:text-white transition-colors shadow-sm">
                    <FaFacebookF className="h-5 w-5" />
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-[#71b1d1]/10 flex items-center justify-center text-[#71b1d1] hover:bg-[#71b1d1] hover:text-white transition-colors shadow-sm">
                    <FaTwitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-[#71b1d1]/10 flex items-center justify-center text-[#71b1d1] hover:bg-[#71b1d1] hover:text-white transition-colors shadow-sm">
                    <FaInstagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-[#71b1d1]/10 flex items-center justify-center text-[#71b1d1] hover:bg-[#71b1d1] hover:text-white transition-colors shadow-sm">
                    <FaLinkedinIn className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
