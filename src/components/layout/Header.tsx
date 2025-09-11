import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import ottomanLogo from "@/assets/ICON-8.png";
import textLogo from "@/assets/WORDMARK-8.png";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleGetQuote = () => {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const phoneNumber = '+256762833491';
  const email = 'kagimujayp01@gmail.com';
  const subject = encodeURIComponent('Quote Request');
  const body = encodeURIComponent('Hello, I would like to request a quote.');

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

  if (isMobile) {
    // Mobile: open dialer
    window.location.href = `tel:${phoneNumber}`;
  } else {
    const confirmWhatsApp = window.confirm(
      `Do you want to contact via WhatsApp?\nPress Cancel to send an email instead.`
    );
    if (confirmWhatsApp) {
      window.open(`https://wa.me/${phoneNumber.replace('+','')}?text=${encodeURIComponent('Hello, I want a quote.')}`, '_blank');
    } else {
      window.open(gmailLink, '_blank');
    }
  }
};


  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="relative flex items-center justify-between h-16 px-4 md:px-8">
         {/* Logo - Left */}
          <Link to="/" className="flex items-center z-10">
            <img 
              src={ottomanLogo} 
              alt="Ottoman Enterprises Logo" 
              className="w-10 h-10 object-contain"
            />
            <div className="hidden sm:block">
              <img 
                src={textLogo} 
                alt="Ottoman Enterprises Logo Text" 
                className="h-10 object-contain"
              />
            </div>
          </Link>

          {/* Navigation - Center */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-primary relative",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
                {location.pathname === item.href && (
                  <div className="absolute -bottom-6 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions - Right */}
          <div className="hidden md:flex items-center space-x-4 z-10">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover-scale">
              <Search className="h-4 w-4" />
            </Button>
            <Button size="sm" className="btn-primary hover-scale" onClick={handleGetQuote}>
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 px-2 py-1 rounded-md",
                    location.pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-2 pt-2">
                <Button variant="ghost" size="sm" className="flex-1">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button size="sm" className="flex-1 btn-primary">
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
  );
}