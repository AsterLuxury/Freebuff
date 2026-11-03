import { useState } from 'react';
import Link from 'next/link';
import AnimatedLogo from '../components/AnimatedLogo';
import { motion } from 'framer-motion';

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    { href: '/destinations', label: 'Destinations' },
    { href: '/tours', label: 'Tours' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-navy text-white">
      <header className="relative">
        <AnimatedLogo className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2" />
        <nav className="hidden md:flex items-center justify-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden p-2 rounded-md text-white hover:bg-gold"
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
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-4xl md:text-5xl font-playfair mb-6">
            Explore Luxury Journeys
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Premium travel experiences from Kurdistan to Turkey and Dubai.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative w-full text-white font-playfair text-xl py-4 px-8 rounded-lg border-2 border-gold hover:bg-gold/30 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </main>

      <footer className="bg-charcoal text-white py-6">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex items-center space-x-4 mb-4">
            <Link href="/about" className="text-gold hover:text-white transition-colors">
              About
            </Link>
            <Link href="/destinations" className="text-gold hover:text-white transition-colors">
              Destinations
            </Link>
            <Link href="/tours" className="text-gold hover:text-white transition-colors">
              Tours
            </Link>
            <Link href="/contact" className="text-gold hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <div className="text-center mt-4">
            <p className="mb-2">&copy; {new Date().getFullYear()} Baravan Travel</p>
            <p>+964 750 330 7830</p>
            <p>baravantest5@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}