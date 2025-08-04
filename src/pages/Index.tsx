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
    }, 10000);
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
    <div className="min-h-screen bg-background">
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
        
        
        {/* Floating Vector Elements */}
        <div className="absolute top-20 right-20 w-16 h-16 text-accent/20 vector-float">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z"/>
          </svg>
        </div>
        
        <div className="absolute bottom-32 left-20 w-12 h-12 text-primary/30 vector-float" style={{ animationDelay: '2s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10"/>
          </svg>
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-6 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <Badge className="mb-4 bg-primary/20 text-primary-foreground border-primary/30 animate-fade-in">
              Professional Equipment Solutions Since 2009
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-reveal" style={{ animationDelay: '0.2s' }}>Ottoman</span> <br />
              <span className="text-reveal gradient-text" style={{ animationDelay: '0.4s' }}>Enterprises</span>
            </h1>
            
            <p className="text-xl lg:text-xl mb-8 text-white/90 leading-relaxed text-reveal" style={{ animationDelay: '0.6s' }}>
              Your trusted partner for professional-grade equipment across agricultural, 
              medical, vocational, and specialized industries.
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
      <section className="py-16 bg-gradient-industrial relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-10 right-10 w-20 h-20 text-primary/10 float">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="interactive-card p-6 rounded-lg" ref={productsCounter.countRef}>
              <div className="counter mb-2">{productsCounter.count}+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Products Available</div>
            </div>
            <div className="interactive-card p-6 rounded-lg" ref={projectsCounter.countRef}>
              <div className="counter mb-2">{projectsCounter.count}+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Projects Completed</div>
            </div>
            <div className="interactive-card p-6 rounded-lg" ref={satisfactionCounter.countRef}>
              <div className="counter mb-2">{satisfactionCounter.count}%</div>
              <div className="text-sm lg:text-base text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="interactive-card p-6 rounded-lg" ref={experienceCounter.countRef}>
              <div className="counter mb-2">{experienceCounter.count}+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Specializations</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive equipment solutions across multiple industries, 
              ensuring quality and reliability in every product we deliver.
            </p>
          </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:flex lg:flex-wrap lg:justify-center lg:gap-x-10 lg:gap-y-12">
            {categories.map((category) => (
              <Link key={category.id} to={`/marketplace?category=${category.id}`} className="w-full max-w-sm">
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
                        <h3 className="text-xl font-semibold">{category.name}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex items-center text-primary font-medium group">
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Products</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
              <Button size="lg" className="btn-primary">
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">Ottoman Enterprises</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine industry expertise, premium products, and exceptional service 
              to deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 interactive-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                <Award className="h-8 w-8 text-primary transition-all duration-300 hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">
                All our equipment meets the highest industry standards with comprehensive warranties and certifications.
              </p>
            </Card>

            <Card className="text-center p-8 interactive-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                <Users className="h-8 w-8 text-primary transition-all duration-300 hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-muted-foreground">
                Our experienced team provides comprehensive consultation, installation, and ongoing technical support.
              </p>
            </Card>

            <Card className="text-center p-8 interactive-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                <Zap className="h-8 w-8 text-primary transition-all duration-300 hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Quick processing and reliable delivery ensures your projects stay on schedule with minimal downtime.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-6 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Upgrade Your Equipment?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let our experts help you find the perfect solutions for your business needs. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-foreground hover:bg-white/90 text-lg px-8 py-3">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white/30 text-black hover:bg-white/10">
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
