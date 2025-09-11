import { useState } from 'react'; 
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Heart, 
  Share2, 
  ChevronLeft, 
  ChevronRight,
  Mail,
  Phone
} from 'lucide-react';
import { Product } from '@/data/products';
import { cn } from '@/lib/utils';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  if (!product) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handlePhoneOrWhatsApp = (message?: string) => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const phoneNumber = '+256762833491';
    const whatsappURL = `https://wa.me/${phoneNumber.replace('+','')}?text=${encodeURIComponent(message || 'Hello, I would like a quote.')}`;

    if (isMobile) {
      // Open mobile dialer
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Desktop: ask for WhatsApp or show number
      const confirmWhatsApp = window.confirm(
        `Do you want to contact us via WhatsApp Web?\nPress Cancel to see the phone number.`
      );
      if (confirmWhatsApp) {
        window.open(whatsappURL, '_blank');
      } else {
        alert(`Please call or whattsapp for quote: ${phoneNumber}`);
      }
    }
  };

  const handleShare = () => {
    const shareData = {
      title: product.name,
      text: `Check out this product: ${product.name}`,
      url: window.location.href,
    };
    if (navigator.share) {
      navigator.share(shareData).catch(() => alert('Sharing failed'));
    } else {
      navigator.clipboard.writeText(shareData.url);
      alert('Product link copied to clipboard');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Carousel */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden bg-white">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
              
              {product.images.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 p-0 rounded-full bg-white/80 hover:bg-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 p-0 rounded-full bg-white/80 hover:bg-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}

              {/* Status Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-1">
                {product.featured && (
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
                {!product.inStock && (
                  <Badge variant="destructive">
                    Out of Stock
                  </Badge>
                )}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={cn(
                      "flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-colors",
                      currentImageIndex === index
                        ? "border-primary"
                        : "border-transparent hover:border-border"
                    )}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header Info */}
            <div>
              <div className="text-sm text-muted-foreground mb-1">
                {product.manufacturer} • {product.model}
              </div>
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Quote Info */}
            <div className="p-4 bg-gradient-card rounded-lg border text-center">
              <p className="text-primary font-bold mt-1">
                Contact us for volume pricing and custom quotes
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button 
                className="flex-1 btn-primary hover-scale flex items-center justify-center gap-2 font-bold" 
                disabled={!product.inStock}
                size="lg"
                onClick={() => handlePhoneOrWhatsApp(`Hello, I want a quote for ${product.name}`)}
              >
                <Phone className="h-4 w-4" />
                {product.inStock ? 'Request Quote' : 'Out of Stock'}
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsLiked(!isLiked)}
                className={cn("hover-scale", isLiked && "text-red-500 border-red-200")}
              >
                <Heart className={cn("h-4 w-4", isLiked && "fill-current")} />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-scale"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="p-4 bg-secondary/50 rounded-lg">
              <h3 className="font-semibold mb-2">Need assistance?</h3>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handlePhoneOrWhatsApp(`Hello, I need assistance for ${product.name}`)}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Expert
                </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => {
                  const email = 'kagimujayp01@gmail.com';
                  const subject = encodeURIComponent(`Quote Request: ${product.name}`);
                  const body = encodeURIComponent(`Hello, I would like a quote for ${product.name}.`);
                  
                  // Gmail web link
                  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
                  
                  // Open Gmail in new tab
                  window.open(gmailLink, '_blank');
                }}
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Quote
              </Button>



              </div>
            </div>

            {/* Detailed Information Tabs */}
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
              </TabsList>
              
              <TabsContent value="specifications" className="space-y-4">
                <div className="grid gap-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                      <span className="font-medium text-muted-foreground">{key}</span>
                      <span className="text-right font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="details" className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Product Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category:</span>
                      <span className="font-medium capitalize">{product.category.replace('-', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Manufacturer:</span>
                      <span className="font-medium">{product.manufacturer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Model:</span>
                      <span className="font-medium">{product.model}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Product ID:</span>
                      <span className="font-medium">{product.id}</span>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Shipping & Support</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Free shipping on orders over $1,000</p>
                    <p>• Professional installation available</p>
                    <p>• 24/7 technical support</p>
                    <p>• Manufacturer warranty included</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
