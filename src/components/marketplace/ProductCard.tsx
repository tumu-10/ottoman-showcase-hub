import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye } from 'lucide-react';
import { Product } from '@/data/products';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  className?: string;
}

export default function ProductCard({ product, onViewDetails, className }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className={cn("product-card group", className)}>
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Product Image */}
        <div className={cn(
          "w-full h-full bg-muted flex items-center justify-center transition-opacity duration-300",
          imageLoaded ? "opacity-0" : "opacity-100"
        )}>
          <div className="skeleton w-full h-full" />
        </div>
        
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            variant="secondary"
            className="w-8 h-8 p-0 rounded-full bg-white/90 hover:bg-white shadow-md"
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
          >
            <Heart className={cn("h-4 w-4", isLiked && "fill-red-500 text-red-500")} />
          </Button>
          
          <Button
            size="sm"
            variant="secondary"
            className="w-8 h-8 p-0 rounded-full bg-white/90 hover:bg-white shadow-md"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Status Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.featured && (
            <Badge variant="default" className="bg-primary text-primary-foreground text-xs">
              Featured
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="destructive" className="text-xs">
              Out of Stock
            </Badge>
          )}
        </div>

        {/* Contact for Price Button */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            className="w-full btn-primary"
            disabled={!product.inStock}
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
          >
            <Eye className="h-4 w-4 mr-2" />
            {product.inStock ? 'View Details' : 'Out of Stock'}
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Manufacturer & Model */}
        <div className="text-xs text-muted-foreground mb-1">
          {product.manufacturer} • {product.model}
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-sm leading-snug mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2 min-h-[2rem]">
          {product.description}
        </p>

        {/* Key Specifications */}
        <div className="mb-3">
          <div className="text-xs space-y-1">
            {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="text-muted-foreground">{key}:</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            <div className="text-xs text-muted-foreground">
              Contact for quote
            </div>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="text-xs hover:bg-primary hover:text-primary-foreground"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}