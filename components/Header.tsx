import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/tours', label: 'Tours' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="flex items-center justify-between flex-wrap bg-navy p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-playfair text-xl">Baravan Travel</span>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block mt-4 lg:inline-block lg:mt-0 text-gold hover:text-white mr-4"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="flex justify-center lg:hidden p-2 rounded-md text-white hover:bg-gold"
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle menu"
        >
          {showMenu ? (
            <>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </>
          ) : (
            <>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </>
          )}
        </button>
      </div>
    </nav>
  );
}