import { Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo4.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border mt-12 sm:mt-16 md:mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Brand Section */}
          
          <div className="space-y-3 md:space-y-4 animate-fade-in-up">
          <img src={logo} alt="KK Handlooms Logo" className="h-24 w-auto mb-2" />
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground">

              KK Handlooms
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Preserving the ancient art of Kalamkari. Authentic handloom textiles
              crafted with traditional techniques passed down through generations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 md:space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-base sm:text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover-scale"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover-scale"
              >
                About Us
              </Link>
              <Link
                to="/clothing"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover-scale"
              >
                Shop Clothing
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover-scale"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-3 md:space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-base sm:text-lg font-semibold text-foreground">Contact Us</h4>
            <div className="flex flex-col space-y-2">
              <a href="tel:9912566016" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover-scale">
                Phone: 9912566016
              </a>
              <a 
                href="mailto:kkhandloom1983@gmail.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20products." 
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover-scale"
              >
                kkhandloom1983@gmail.com
              </a>
              <a href="https://wa.me/919912566016" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover-scale">
                WhatsApp: 9912566016
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground mt-6">
          &copy; {currentYear} KK Handlooms. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
