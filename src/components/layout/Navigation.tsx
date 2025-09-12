'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { cn } from '@/utils/cn';
import type { NavItem } from '@/types';
import './Navigation.css';

const navItems: NavItem[] = [
  { href: '/', label: 'HOME' },
  { href: '/residential', label: 'RESIDENTIAL' },
  { href: '/commercial', label: 'COMMERCIAL' },
  { href: '/sell-propane', label: 'SELL PROPANE' },
  { href: '/our-promise', label: 'OUR PROMISE' },
  { href: '/about', label: 'ABOUT' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Ensure component is mounted before checking pathname
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActiveRoute = (href: string) => {
    if (!mounted) return false; // Prevent hydration mismatch
    return pathname === href;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-gilroy">
        <div className="mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center h-18">
          {/* Logo - Extreme Left */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="h-8 lg:h-10 relative">
                <Image
                  src="/florisgas-logo.svg"
                  alt="FlorisGAS Logo"
                  width={102}
                  height={40}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex flex-1 justify-center space-x-6">
            {navItems.map((item) => {
              const isActive = isActiveRoute(item.href);
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive ? "nav-item-active" : "nav-item"}
                >
                  {item.label}
                  {isActive && <span className="sr-only"> (current page)</span>}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button - Extreme Right */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <button className="bg-accent-red hover:bg-accent-red-hover text-white px-4 py-2.5 rounded-md font-medium text-xs tracking-wide transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2">
              <Image
                src="/location-01.svg"
                alt="Location"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              FIND LOCATION
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'lg:hidden transition-all duration-300 ease-in-out',
            isOpen
              ? 'max-h-screen opacity-100 pb-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          )}
        >
          <nav className="flex flex-col space-y-2 pt-3">
            {navItems.map((item) => {
              const isActive = isActiveRoute(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive ? "mobile-nav-item-active" : "mobile-nav-item"}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <button className="bg-accent-red hover:bg-accent-red-hover text-white px-4 py-2.5 rounded-md font-medium text-xs tracking-wide transition-all duration-200 mt-3 self-start shadow-sm flex items-center gap-2">
              <Image
                src="/location-01.svg"
                alt="Location"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              FIND LOCATION
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
