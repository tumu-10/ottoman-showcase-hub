import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import ottomanLogo from '@/assets/ottoman-logo-horizontal.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={ottomanLogo} 
              alt="Ottoman Enterprises Logo" 
              className="h-8 object-contain transition-all duration-300 group-hover:scale-105 animate-pulse-glow"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover-scale">
              <Search className="h-4 w-4" />
            </Button>
            <Button size="sm" className="btn-primary hover-scale">
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
      </div>
    </header>
  );
}