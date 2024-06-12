import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-bl from-[#E1BE6D] to-[#8E6428]         text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li>
                <Link href="/about" className="hover:text-[#8E6428]">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#8E6428]">
                  Careers
                </a>
              </li>
             
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul>
              <li>
                <Link href="/blog" className="hover:text-[#8E6428]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
              target='_blank'
                href="https://www.facebook.com/james.addo.716"
                className="text-white-400 hover:text-[#8E6428] transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
              target='_blank'

                href="https://www.tiktok.com/@adomex1?is_from_webapp=1&sender_device=pc"
                className="text-white-400 hover:text-[#8E6428] transition-colors"
              >
                <FaTiktok size={24} />
              </a>
              <a
              target='_blank'

                href="https://wa.me/233248478492"
                className="text-white-400 hover:text-[#8E6428] transition-colors"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white-700 pt-8">
          <p className="text-center text-white-400">
            &copy; {currentYear} Adomex. All rights reserved | Developed By ATS Tech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;