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
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm"
        >
          <Heart className="h-4 w-4" />
        </Button>
        {product.stock < 10 && (
          <Badge variant="destructive" className="absolute top-2 left-2">
            Low Stock
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="text-xs">
            {product.brand}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
        </div>
        
        <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
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

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-primary">
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
          className="gap-1"
        >
          <ShoppingCart className="h-3 w-3" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;