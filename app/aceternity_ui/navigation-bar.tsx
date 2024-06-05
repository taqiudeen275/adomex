'use client'

import { MenuIcon, SidebarCloseIcon } from 'lucide-react';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import logo from "@/public/logo.svg"
import Image from 'next/image';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full  z-10 ${hasScrolled ? 'bg-white/70 border-b backdrop-blur' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link className="text-2xl font-bold text-orange-600" href="/">
             <Image className='h-14 w-14'  alt='logo' src={logo} />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link className={`hover:text-primary px-3 py-2 rounded-md text-sm font-medium ${hasScrolled ? 'text-black' : 'text-white' }`} href="/">
                Home
              </Link>
              <Link className={`hover:text-primary px-3 py-2 rounded-md text-sm font-medium ${hasScrolled ? 'text-black' : 'text-white' }`} href="/about">
                About
              </Link>
              <Link className={`hover:text-primary px-3 py-2 rounded-md text-sm font-medium ${hasScrolled ? 'text-black' : 'text-white' }`} href="/#services">Services
              </Link>
              <Link className={`hover:text-primary px-3 py-2 rounded-md text-sm font-medium ${hasScrolled ? 'text-black' : 'text-white' }`} href="/#contact">
                Contact
              </Link>
              <Link className={`hover:text-primary px-3 py-2 rounded-md text-sm font-medium ${hasScrolled ? 'text-black' : 'text-white' }`} href="/gallery">
                Gallery
              </Link>
              <Link className={`hover:text-primary px-3 py-2 rounded-md text-sm font-medium ${hasScrolled ? 'text-black' : 'text-white' }`} href="/blog">
                Blog
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-primary inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <SidebarCloseIcon className={`block h-6 w-6   ${hasScrolled ? 'text-black' : 'text-white'}`} aria-hidden="true" />
              ) : (
                <MenuIcon className={`block h-6 w-6   ${hasScrolled ? 'text-black' : 'text-white'}`} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link className={` hover:text-primary block px-3 py-2 rounded-md text-base font-medium  ${hasScrolled ? 'text-black' : 'text-white'} `} href="/">
            Home
          </Link>
          <Link className={`hover:text-primary block px-3 py-2 rounded-md text-base font-medium  ${hasScrolled ? 'text-black' : 'text-white'} `} href="/about">
            About
          </Link>
          <Link className={`hover:text-primary block px-3 py-2 rounded-md text-base font-medium  ${hasScrolled ? 'text-blue' : 'text-white'} `} href="/#services">
            Services
          </Link>
          <Link className={`hover:text-primary block px-3 py-2 rounded-md text-base font-medium  ${hasScrolled ? 'text-black' : 'text-white'} `} href="/#contact">
            Contact
          </Link>
          <Link className={`hover:text-primary block px-3 py-2 rounded-md text-base font-medium  ${hasScrolled ? 'text-black' : 'text-white'} `} href="/gallery">
            Gallery
          </Link>
          <Link className={`hover:text-primary block px-3 py-2 rounded-md text-base font-medium  ${hasScrolled ? 'text-black' : 'text-white'} `} href="/blog">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
