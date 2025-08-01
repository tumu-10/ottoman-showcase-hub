import { useState, useMemo } from 'react';
import { Search, Filter, Grid3X3, List, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ProductCard from '@/components/marketplace/ProductCard';
import ProductModal from '@/components/marketplace/ProductModal';
import { allProducts, categories, getProductsByCategory, Product, ProductCategory } from '@/data/products';
import { cn } from '@/lib/utils';

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

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let products = selectedCategory === 'all' ? allProducts : getProductsByCategory(selectedCategory);
    
    // Filter by search query
    if (searchQuery) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.manufacturer.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    products.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'featured':
          return Number(b.featured) - Number(a.featured);
        default:
          return 0;
      }
    });

    return products;
  }, [selectedCategory, searchQuery, sortBy]);

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
      <div className="bg-gradient-industrial border-b">
        <div className="container mx-auto px-4 lg:px-6 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Professional Equipment <span className="gradient-text">Marketplace</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover our extensive catalog of professional-grade equipment and tools 
              across multiple industries. Quality you can trust, service you can count on.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search equipment, tools, and supplies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-base bg-background border-border focus:border-primary"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="border-b bg-background sticky top-16 z-40">
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-wrap gap-2 justify-center">
            <div
              className={cn(
                "category-pill",
                selectedCategory === 'all' && "active"
              )}
              onClick={() => setSelectedCategory('all')}
            >
              All Categories ({allProducts.length})
            </div>
            {categories.map((category) => {
              const count = getProductsByCategory(category.id as ProductCategory).length;
              return (
                <div
                  key={category.id}
                  className={cn(
                    "category-pill",
                    selectedCategory === category.id && "active"
                  )}
                  onClick={() => setSelectedCategory(category.id as ProductCategory)}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name} ({count})
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Category Hero Images */}
      {selectedCategory !== 'all' && (
        <div className="relative h-64 overflow-hidden">
          <img
            src={categoryImages[selectedCategory]}
            alt={categories.find(c => c.id === selectedCategory)?.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-2">
                {categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-lg opacity-90">
                {categories.find(c => c.id === selectedCategory)?.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Filters and Controls */}
      <div className="border-b bg-background">
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">
                {filteredProducts.length} products found
              </span>
              
              {searchQuery && (
                <Badge variant="secondary" className="text-xs">
                  Search: "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery('')}
                    className="ml-2 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-3">
              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="featured">Featured First</SelectItem>
                </SelectContent>
              </Select>

              <Separator orientation="vertical" className="h-6" />

              {/* View Mode */}
              <div className="flex items-center border rounded-md">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none border-l"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 lg:px-6 py-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or browse different categories
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        ) : (
          <div className={cn(
            viewMode === 'grid' 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
          )}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={handleViewProduct}
                className={viewMode === 'list' ? "flex-row" : ""}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}