import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCoffee } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact-section" className="bg-[#1e140f] text-bg-cream pt-16 pb-8 border-t-4 border-border-gold no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Slogan Banner */}
        <div className="text-center mb-12 border-b border-border-gold/20 pb-10">
          <div className="inline-flex items-center justify-center p-3 bg-primary rounded-full mb-4 text-bg-cream">
            <FaCoffee className="text-2xl animate-float" />
          </div>
          <h3 className="font-playfair text-xl md:text-2xl font-bold tracking-wider text-border-gold uppercase">
            Thank You For Choosing Onyx Coffee Club
          </h3>
          <p className="font-merriweather italic text-zinc-400 mt-2 text-sm md:text-base">
            We Serve Coffee With Serenity
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 font-inter">
          
          {/* Working Hours */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <h4 className="font-playfair text-lg font-bold text-border-gold tracking-wide uppercase flex items-center space-x-2">
              <FaClock className="text-accent text-sm" />
              <span>Opening Hours</span>
            </h4>
            <ul className="text-zinc-400 text-sm space-y-1">
              <li>Monday - Friday: 8:00 AM - 11:00 PM</li>
              <li>Saturday - Sunday: 9:00 AM - 12:00 AM</li>
              <li className="text-accent text-[11px] font-semibold tracking-wider mt-1 uppercase">Kitchen closes 30 mins before closing</li>
            </ul>
          </div>

          {/* Location / Address */}
          <div className="flex flex-col items-center text-center space-y-3">
            <h4 className="font-playfair text-lg font-bold text-border-gold tracking-wide uppercase flex items-center space-x-2">
              <FaMapMarkerAlt className="text-accent text-sm" />
              <span>Our Location</span>
            </h4>
            <p className="text-zinc-400 text-sm max-w-xs leading-relaxed">
              Onyx Coffee Club, Ground Floor, Serenity Avenue, <br />
              Cyber Hub, Sector 56, Gurgaon - 122011
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-3">
            <h4 className="font-playfair text-lg font-bold text-border-gold tracking-wide uppercase flex items-center space-x-2">
              <FaEnvelope className="text-accent text-sm md:order-last md:ml-2" />
              <span>Get In Touch</span>
            </h4>
            <div className="text-zinc-400 text-sm space-y-1">
              <p className="flex items-center justify-center md:justify-end space-x-2">
                <FaPhoneAlt className="text-accent text-xs" />
                <span>+91 98765 43210</span>
              </p>
              <p className="flex items-center justify-center md:justify-end space-x-2">
                <span>info@onyxcoffeeclub.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-border-gold/15 pt-8 text-xs text-zinc-500 font-inter">
          <p>© {currentYear} ONYX Coffee Club. All rights reserved. Created with Serenity.</p>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="p-2.5 rounded-full bg-zinc-800/80 hover:bg-accent hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="text-sm text-zinc-300 hover:text-white" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer"
              className="p-2.5 rounded-full bg-zinc-800/80 hover:bg-accent hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-sm text-zinc-300 hover:text-white" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer"
              className="p-2.5 rounded-full bg-zinc-800/80 hover:bg-accent hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="text-sm text-zinc-300 hover:text-white" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
