import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="w-full px-8 py-6">
        {/* Brand, Quick Links and Contact Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-teal-100 mb-4">FlipaZon</h2>
            <p className="text-teal-200 text-lg">
              Your trusted online marketplace for quality products.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-semibold text-teal-100 mb-3 text-xl">Quick Links</h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/about" className="text-teal-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-teal-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-teal-200 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/order-returns" className="text-teal-200 hover:text-white transition-colors">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold text-teal-100 mb-3 text-xl">Contact</h3>
            <div className="space-y-2 text-base text-teal-200">
              <div className="flex items-center justify-center md:justify-end space-x-3">
                <Phone className="w-5 h-5" />
                <span>+91 1800 400 672</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-3">
                <Mail className="w-5 h-5" />
                <span>support@flipazon.com</span>
              </div>
            </div>
            <div className="flex justify-center md:justify-end space-x-4 mt-4">
              <Link href="https://www.facebook.com/" className="text-teal-200 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="https://x.com/?lang=en" className="text-teal-200 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="https://www.instagram.com/" className="text-teal-200 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-teal-700 mt-6 pt-4 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-8 text-base text-teal-200">
            <p>© 2025 FlipaZon. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;