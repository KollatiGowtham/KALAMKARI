import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Clothing", path: "/clothing" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2"
          >


            <img
              src={logo}
              alt="KK Handlooms Logo"
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </Link>
            <Link
              to="/"
              className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-foreground hover:text-primary transition-colors duration-300 animate-slide-in-left"
            >
              KK Handlooms
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm lg:text-base font-medium transition-all duration-300 relative group animate-fade-in ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover-scale"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 animate-scale-in" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6 animate-scale-in" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md shadow-lg animate-slide-in-left">
          <div className="container mx-auto px-4 py-6 space-y-3 sm:space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-base sm:text-lg font-medium py-2 transition-colors duration-300 animate-fade-in-up hover-scale ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
