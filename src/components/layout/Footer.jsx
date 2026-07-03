import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCoffee, FaLeaf, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact-section"
      className="text-white pt-16 pb-8 border-t-4 no-print"
      style={{
        background: 'linear-gradient(160deg, #451a03 0%, #78350f 35%, #92400e 65%, #b45309 100%)',
        borderTopColor: '#f59e0b',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Upper Slogan Banner */}
        <div className="text-center mb-12 border-b border-amber-400/20 pb-10">
          <div className="inline-flex items-center justify-center p-4 rounded-full mb-5 bg-amber-400/20 backdrop-blur-sm">
            <FaCoffee className="text-3xl text-amber-300 animate-float" />
          </div>
          <h3 className="font-playfair text-xl md:text-3xl font-bold tracking-wider text-amber-200 uppercase">
            Thank You For Choosing Onyx Coffee Club
          </h3>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px w-12 bg-amber-400/40" />
            <FaLeaf className="text-amber-400 text-xs" />
            <p className="font-merriweather italic text-amber-300/80 text-sm md:text-base">
              We Serve Coffee With Serenity
            </p>
            <FaLeaf className="text-amber-400 text-xs" />
            <div className="h-px w-12 bg-amber-400/40" />
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 font-inter">

          {/* Working Hours */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <h4 className="font-playfair text-lg font-bold text-amber-300 tracking-wide uppercase flex items-center gap-2">
              <FaClock className="text-amber-400 text-sm" />
              <span>Opening Hours</span>
            </h4>
            <ul className="text-amber-100/70 text-sm space-y-1.5">
              <li>Monday – Friday: 8:00 AM – 11:00 PM</li>
              <li>Saturday – Sunday: 9:00 AM – 12:00 AM</li>
              <li className="text-amber-400 text-[11px] font-semibold tracking-wider mt-2 uppercase">
                Kitchen closes 30 mins before closing
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center text-center space-y-3">
            <h4 className="font-playfair text-lg font-bold text-amber-300 tracking-wide uppercase flex items-center gap-2">
              <FaMapMarkerAlt className="text-amber-400 text-sm" />
              <span>Our Location</span>
            </h4>
            <p className="text-amber-100/70 text-sm max-w-xs leading-relaxed">
              AC/209 Gyan Vihar Marg, Near Kanha Central Spine,<br />
              Jagatpura, Jaipur, Rajasthan – 302017
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-3">
            <h4 className="font-playfair text-lg font-bold text-amber-300 tracking-wide uppercase flex items-center gap-2">
              <FaEnvelope className="text-amber-400 text-sm" />
              <span>Get In Touch</span>
            </h4>
            <div className="text-amber-100/70 text-sm space-y-1.5">
              <p className="flex items-center justify-center md:justify-end gap-2">
                <FaPhoneAlt className="text-amber-400 text-xs" />
                <span>+91 94146 44988</span>
              </p>
              <p>info@onyxcoffeeclub.com</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-amber-400/15 pt-6 text-xs text-amber-200/60 font-inter gap-4">
          <p>© {currentYear} ONYX Coffee Club. All rights reserved. Created with Serenity.</p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              { href: 'https://instagram.com', icon: <FaInstagram />, label: 'Instagram' },
              { href: 'https://facebook.com', icon: <FaFacebookF />, label: 'Facebook' },
              { href: 'https://twitter.com', icon: <FaTwitter />, label: 'Twitter' },
              { href: 'https://wa.me/919414644988', icon: <FaWhatsapp />, label: 'WhatsApp' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-amber-400/20 text-amber-300 hover:bg-amber-400/20 hover:text-amber-200 transition-all duration-200"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
