import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product, useStore } from '@/contexts/StoreContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { dispatch } = useStore();

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

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-gradient-card overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm h-8 w-8 p-0"
        >
          <Heart className="h-3 w-3" />
        </Button>
        {product.stock < 10 && (
          <Badge variant="destructive" className="absolute top-2 left-2 text-xs">
            Low Stock
          </Badge>
        )}
      </div>

      <CardContent className="p-3 md:p-4">
        <div className="flex items-center gap-1 md:gap-2 mb-2 flex-wrap">
          <Badge variant="secondary" className="text-xs">
            {product.brand}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
        </div>
        
        <h3 className="font-semibold text-xs md:text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 mb-2">
          {renderStars(product.rating)}
          <span className="text-xs text-muted-foreground ml-1">
            ({product.rating})
          </span>
        </div>
        
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="p-3 md:p-4 pt-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex flex-col w-full sm:w-auto">
          <span className="text-base md:text-lg font-bold text-primary">
            ₹{product.price.toLocaleString()}
          </span>
          <span className="text-xs text-muted-foreground">
            Stock: {product.stock}
          </span>
        </div>
        
        <Button
          variant="gradient"
          size="sm"
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="gap-1 w-full sm:w-auto text-xs"
        >
          <ShoppingCart className="h-3 w-3" />
          <span className="hidden sm:inline">Add to Cart</span>
          <span className="sm:hidden">Add</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;