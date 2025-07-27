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
  const { state, dispatch } = useStore();
  const [showQuickView, setShowQuickView] = useState(false);
  
  const isInWishlist = state.wishlist.some(item => item.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking button
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success(`${product.name} added to cart!`);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking button
    if (isInWishlist) {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product.id });
      toast.success(`${product.name} removed from wishlist`);
    } else {
      dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
      toast.success(`${product.name} added to wishlist`);
    }
  };

  const handleCardClick = () => {
    setShowQuickView(true);
  };

  const handleQuickViewClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowQuickView(false);
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
      <Card 
        className="shadow-lg hover:shadow-xl rounded-xl p-4 hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 overflow-hidden group cursor-pointer animate-fade-in"
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick();
          }
        }}
        aria-label={`View details for ${product.name}`}
      >
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Discount Badge */}
          {hasDiscount && (
            <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded-full shadow-md transition-colors duration-200">
              -{discountPercentage}%
            </Badge>
          )}
          
          {/* Low Stock Badge */}
          {product.stock < 10 && (
            <Badge variant="destructive" className="absolute top-2 left-2 text-xs shadow-md">
              Low Stock
            </Badge>
          )}
          
          {/* Action Buttons */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 bg-white/90 backdrop-blur-sm hover:bg-white shadow-md transition-all duration-200"
              aria-label="Quick view"
              onClick={(e) => {
                e.stopPropagation();
                setShowQuickView(true);
              }}
            >
              <Eye className="h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`h-8 w-8 p-0 bg-white/90 backdrop-blur-sm hover:bg-white shadow-md transition-all duration-200 ${
                isInWishlist ? 'text-red-500' : 'text-gray-600'
              }`}
              aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
              onClick={handleWishlistToggle}
            >
              <Heart className={`h-3 w-3 ${isInWishlist ? 'fill-current' : ''}`} />
            </Button>
          </div>
        </div>

        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <Badge variant="secondary" className="text-xs">
              {product.brand}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {product.category}
            </Badge>
          </div>
          
          <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 min-h-[3.5rem]">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-1 mb-3">
            {renderStars(product.rating)}
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
              ({product.rating})
            </span>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 min-h-[2.5rem]">
            {product.description}
          </p>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex flex-col w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                ₹{product.price.toLocaleString()}
              </span>
              {hasDiscount && (
                <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                  ₹{originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Stock: {product.stock}
            </span>
          </div>
          
          <Button
            className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-4 py-2 rounded-lg w-full sm:w-auto text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={handleQuickViewClose}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{product.name}</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleQuickViewClose}
                  aria-label="Close quick view"
                  className="hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Product Details</h3>
                    <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{product.brand}</Badge>
                    <Badge variant="outline">{product.category}</Badge>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {renderStars(product.rating)}
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                      ({product.rating} out of 5)
                    </span>
                  </div>
                  
                  <div>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {hasDiscount && (
                      <span className="text-lg text-gray-500 dark:text-gray-400 line-through ml-2">
                        ₹{originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p>Stock: {product.stock} units</p>
                    {hasDiscount && (
                      <p className="text-red-600 dark:text-red-400 font-medium">
                        Save {discountPercentage}% on this item!
                      </p>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                      className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-6 py-2 shadow-md hover:shadow-lg transition-all duration-200"
                      onClick={handleAddToCart}
                      disabled={product.stock === 0}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      className={`px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 ${
                        isInWishlist ? 'text-red-500 border-red-500' : ''
                      }`}
                      onClick={handleWishlistToggle}
                    >
                      <Heart className={`h-4 w-4 mr-2 ${isInWishlist ? 'fill-current' : ''}`} />
                      {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
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