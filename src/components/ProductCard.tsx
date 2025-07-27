import { Star, ShoppingCart, Heart, Eye, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product, useStore } from '@/contexts/StoreContext';
import { toast } from 'sonner';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { dispatch } = useStore();
  const [showQuickView, setShowQuickView] = useState(false);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success(`${product.name} added to cart!`);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  // Calculate discount percentage (mock data - you can add discount field to your product type)
  const hasDiscount = Math.random() > 0.7; // 30% chance of discount
  const discountPercentage = hasDiscount ? Math.floor(Math.random() * 30) + 10 : 0;
  const originalPrice = hasDiscount ? product.price * (1 + discountPercentage / 100) : product.price;

  return (
    <>
      <Card className="shadow-lg rounded-xl p-4 hover:scale-105 transition-transform duration-300 bg-white overflow-hidden group">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Discount Badge */}
          {hasDiscount && (
            <Badge className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              -{discountPercentage}%
            </Badge>
          )}
          
          {/* Low Stock Badge */}
          {product.stock < 10 && (
            <Badge variant="destructive" className="absolute top-2 left-2 text-xs">
              Low Stock
            </Badge>
          )}
          
          {/* Action Buttons */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 bg-white/80 backdrop-blur-sm hover:bg-white"
              aria-label="Quick view"
              onClick={() => setShowQuickView(true)}
            >
              <Eye className="h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 bg-white/80 backdrop-blur-sm hover:bg-white"
              aria-label="Add to wishlist"
            >
              <Heart className="h-3 w-3" />
            </Button>
          </div>
        </div>

        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Badge variant="secondary" className="text-xs">
              {product.brand}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {product.category}
            </Badge>
          </div>
          
          <h3 className="text-lg font-semibold mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-1 mb-2">
            {renderStars(product.rating)}
            <span className="text-xs text-muted-foreground ml-1">
              ({product.rating})
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.description}
          </p>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex flex-col w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <span className="text-blue-600 font-bold text-lg">
                ₹{product.price.toLocaleString()}
              </span>
              {hasDiscount && (
                <span className="text-sm text-gray-500 line-through">
                  ₹{originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <span className="text-xs text-muted-foreground">
              Stock: {product.stock}
            </span>
          </div>
          
          <Button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full sm:w-auto text-sm font-medium transition-colors"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>

      {/* Quick View Modal */}
      {showQuickView && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowQuickView(false)}
                  aria-label="Close quick view"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Product Details</h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{product.brand}</Badge>
                    <Badge variant="outline">{product.category}</Badge>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {renderStars(product.rating)}
                    <span className="text-sm text-gray-600 ml-2">
                      ({product.rating} out of 5)
                    </span>
                  </div>
                  
                  <div>
                    <span className="text-2xl font-bold text-blue-600">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {hasDiscount && (
                      <span className="text-lg text-gray-500 line-through ml-2">
                        ₹{originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <p>Stock: {product.stock} units</p>
                    {hasDiscount && (
                      <p className="text-red-600 font-medium">
                        Save {discountPercentage}% on this item!
                      </p>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-2"
                      onClick={handleAddToCart}
                      disabled={product.stock === 0}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      className="px-6 py-2"
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      Wishlist
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;