export default function Footer() {
  return (
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
  );
}