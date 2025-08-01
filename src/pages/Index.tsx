import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap } from 'lucide-react';
import { getFeaturedProducts, categories } from '@/data/products';
import ProductCard from '@/components/marketplace/ProductCard';
import { useState } from 'react';
import ProductModal from '@/components/marketplace/ProductModal';
import { Product } from '@/data/products';

import heroImage from '@/assets/hero-image.jpg';
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

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const featuredProducts = getFeaturedProducts().slice(0, 4);

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
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Ottoman Enterprises - Professional Equipment Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-6 h-full flex items-center">
          <div className="max-w-2xl text-white animate-fade-in">
            <Badge className="mb-4 bg-primary/20 text-primary-foreground border-primary/30">
              Professional Equipment Solutions Since 2009
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ottoman <br />
              <span className="gradient-text">Enterprises</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              Your trusted partner for professional-grade equipment across agricultural, 
              medical, vocational, and specialized industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/marketplace">
                <Button size="lg" className="btn-primary text-lg px-8 py-3">
                  Explore Marketplace
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground">
                  Get Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-industrial">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">250+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Products Available</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Projects Completed</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm lg:text-base text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">15+</div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={category.id} to={`/marketplace?category=${category.id}`}>
                <Card className="product-card h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={categoryImages[category.id as keyof typeof categoryImages]}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-4xl mb-2">{category.icon}</div>
                        <h3 className="text-xl font-semibold">{category.name}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex items-center text-primary font-medium">
                      Explore Products
                      <ArrowRight className="ml-2 h-4 w-4" />
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
            <Card className="text-center p-8 card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">
                All our equipment meets the highest industry standards with comprehensive warranties and certifications.
              </p>
            </Card>

            <Card className="text-center p-8 card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-muted-foreground">
                Our experienced team provides comprehensive consultation, installation, and ongoing technical support.
              </p>
            </Card>

            <Card className="text-center p-8 card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
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
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10">
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
