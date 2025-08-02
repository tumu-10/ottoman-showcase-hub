import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap } from 'lucide-react';
import { getFeaturedProducts, categories } from '@/data/products';
import ProductCard from '@/components/marketplace/ProductCard';
import { useState, useEffect } from 'react';
import ProductModal from '@/components/marketplace/ProductModal';
import { Product } from '@/data/products';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';
import { cn } from '@/lib/utils';

import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import categoryAgricultural from '@/assets/category-agricultural.jpg';
import categoryBeekeeping from '@/assets/category-beekeeping.jpg';
import categoryVocational from '@/assets/category-vocational.jpg';
import categoryMedical from '@/assets/category-medical.jpg';
import categoryPromotional from '@/assets/category-promotional.jpg';

const categoryImages = {
  agricultural: categoryAgricultural,
  beekeeping: categoryBeekeeping,
  vocational: categoryVocational,
  medical: categoryMedical,
  promotional: categoryPromotional
};

const heroSlides = [heroSlide1, heroSlide2, heroSlide3];

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = getFeaturedProducts().slice(0, 4);

  // Animated counters
  const productsCounter = useCounterAnimation({ end: 250, duration: 2000 });
  const projectsCounter = useCounterAnimation({ end: 100, duration: 2000 });
  const satisfactionCounter = useCounterAnimation({ end: 98, duration: 2000 });
  const experienceCounter = useCounterAnimation({ end: 15, duration: 2000 });

  // Hero slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-background font-poppins">
      {/* Hero Section with Slideshow */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden hero-slideshow">
        {/* Background Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
        
        {/* Gradient Overlay */}
        <div className="hero-overlay" />
        
        {/* Vector Flow Elements */}
        <div className="absolute top-10 right-10 w-40 h-80 opacity-15 animate-float">
          <svg viewBox="0 0 200 400" className="w-full h-full">
            <path
              d="M50 50 Q150 150 100 250 Q50 350 150 400"
              stroke="hsl(var(--secondary))"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M100 30 Q200 120 120 220 Q80 320 180 380"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse delay-500"
            />
          </svg>
        </div>
        
        {/* Geometric Elements */}
        <div className="absolute top-32 left-16 flex space-x-4 animate-float delay-300">
          <div className="w-6 h-6 border-2 border-secondary rounded-full animate-pulse" />
          <div className="w-4 h-4 bg-secondary rounded-full animate-pulse delay-200" />
          <div className="w-5 h-5 border border-primary rounded-full animate-pulse delay-400" />
        </div>
        
        <div className="absolute bottom-32 left-20 flex space-x-3 animate-float delay-700">
          <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[15px] border-l-transparent border-r-transparent border-b-secondary animate-pulse" />
          <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-primary animate-pulse delay-300" />
          <div className="w-0 h-0 border-l-[9px] border-r-[9px] border-b-[14px] border-l-transparent border-r-transparent border-b-secondary animate-pulse delay-600" />
        </div>
        
        {/* Dots Pattern */}
        <div className="absolute bottom-40 right-20 grid grid-cols-3 gap-2 animate-float delay-1000">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-2 h-2 rounded-full animate-pulse",
                i % 3 === 0 ? "bg-primary" : i % 3 === 1 ? "bg-secondary" : "border border-primary"
              )}
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-6 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <Badge className="mb-4 bg-primary/20 text-primary-foreground border-primary/30 animate-fade-in">
              Professional Equipment Solutions Since 2009
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white font-poppins">
              <span className="inline-block animate-text-reveal">Professional</span>{' '}
              <span className="inline-block animate-text-reveal delay-200">Equipment</span>
              <span className="block gradient-text-hero animate-text-reveal delay-400">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl font-poppins animate-fade-in delay-600">
              <span className="inline-block animate-text-reveal delay-800">Discover</span>{' '}
              <span className="inline-block animate-text-reveal delay-1000">premium</span>{' '}
              <span className="inline-block animate-text-reveal delay-1200">agricultural,</span>{' '}
              <span className="inline-block animate-text-reveal delay-1400">medical,</span>{' '}
              <span className="inline-block animate-text-reveal delay-1600">promotional,</span>{' '}
              <span className="inline-block animate-text-reveal delay-1800">and</span>{' '}
              <span className="inline-block animate-text-reveal delay-2000">vocational</span>{' '}
              <span className="inline-block animate-text-reveal delay-2200">equipment</span>
              <br />
              <span className="inline-block animate-text-reveal delay-2400">from</span>{' '}
              <span className="inline-block animate-text-reveal delay-2600">trusted</span>{' '}
              <span className="inline-block animate-text-reveal delay-2800">brands</span>{' '}
              <span className="inline-block animate-text-reveal delay-3000">worldwide.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 text-reveal" style={{ animationDelay: '0.8s' }}>
              <Link to="/marketplace">
                <Button size="lg" className="btn-primary text-lg px-8 py-3 hover-scale">
                  Explore Marketplace
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground hover-scale">
                  Get Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Background Vector Elements */}
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 400">
            <path
              d="M0 200 Q300 100 600 200 Q900 300 1200 200"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M0 150 Q400 250 800 150 Q1000 50 1200 150"
              stroke="hsl(var(--secondary))"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse delay-1000"
            />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300" ref={productsCounter.countRef}>
              <div className="relative p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="text-5xl font-bold font-poppins mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-counter-up">
                  {productsCounter.count}+
                </div>
                <div className="text-muted-foreground font-poppins font-medium">Products</div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-300 delay-200" ref={projectsCounter.countRef}>
              <div className="relative p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="text-5xl font-bold font-poppins mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-counter-up">
                  {projectsCounter.count}+
                </div>
                <div className="text-muted-foreground font-poppins font-medium">Projects</div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-300 delay-400" ref={satisfactionCounter.countRef}>
              <div className="relative p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="text-5xl font-bold font-poppins mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-counter-up">
                  {satisfactionCounter.count}%
                </div>
                <div className="text-muted-foreground font-poppins font-medium">Client Satisfaction</div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-300 delay-600" ref={experienceCounter.countRef}>
              <div className="relative p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="text-5xl font-bold font-poppins mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-counter-up">
                  {experienceCounter.count}+
                </div>
                <div className="text-muted-foreground font-poppins font-medium">Years Experience</div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-poppins">
              Our <span className="gradient-text">Specializations</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-poppins">
              We provide comprehensive equipment solutions across multiple industries, 
              ensuring quality and reliability in every product we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={category.id} to={`/marketplace?category=${category.id}`}>
                <Card className="product-card h-full interactive-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={categoryImages[category.id as keyof typeof categoryImages]}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center">
                      <div className="text-center text-white transform transition-transform duration-300 hover:scale-110">
                        <div className="text-4xl mb-2 animate-pulse-glow">{category.icon}</div>
                        <h3 className="text-xl font-semibold font-poppins">{category.name}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4 font-poppins">{category.description}</p>
                    <div className="flex items-center text-primary font-medium group font-poppins">
                      Explore Products
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-industrial">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-poppins">
              Featured <span className="gradient-text">Products</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-poppins">
              Discover our most popular and highly-rated equipment solutions, 
              trusted by professionals across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={handleViewProduct}
              />
            ))}
          </div>

          <div className="text-center">
            <Link to="/marketplace">
              <Button size="lg" className="btn-primary font-poppins">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-poppins">
              Why Choose <span className="gradient-text">Ottoman Enterprises</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-poppins">
              We combine industry expertise, premium products, and exceptional service 
              to deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 interactive-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                <Award className="h-8 w-8 text-primary transition-all duration-300 hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-poppins">Premium Quality</h3>
              <p className="text-muted-foreground font-poppins">
                All our equipment meets the highest industry standards with comprehensive warranties and certifications.
              </p>
            </Card>

            <Card className="text-center p-8 interactive-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                <Users className="h-8 w-8 text-primary transition-all duration-300 hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-poppins">Expert Support</h3>
              <p className="text-muted-foreground font-poppins">
                Our experienced team provides comprehensive consultation, installation, and ongoing technical support.
              </p>
            </Card>

            <Card className="text-center p-8 interactive-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                <Zap className="h-8 w-8 text-primary transition-all duration-300 hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-poppins">Fast Delivery</h3>
              <p className="text-muted-foreground font-poppins">
                Quick processing and reliable delivery ensures your projects stay on schedule with minimal downtime.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-6 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-poppins">
            Ready to Upgrade Your Equipment?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto font-poppins">
            Let our experts help you find the perfect solutions for your business needs. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-foreground hover:bg-white/90 text-lg px-8 py-3 font-poppins">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10 font-poppins">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;