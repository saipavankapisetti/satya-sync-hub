import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useStore } from '@/contexts/StoreContext';
import { toast } from 'sonner';

const Cart = () => {
  const { state, dispatch } = useStore();
  const { cart, isCartOpen } = state;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: id });
      toast.success('Item removed from cart');
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
      <Card className="w-full sm:w-96 h-full rounded-none border-l shadow-2xl bg-background animate-in slide-in-from-right">
        <CardHeader className="border-b p-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-sm md:text-base">
              <ShoppingBag className="h-4 w-4 md:h-5 md:w-5" />
              Shopping Cart ({totalItems})
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 overflow-y-auto p-0">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center p-4">
              <ShoppingBag className="h-12 w-12 md:h-16 md:w-16 text-muted-foreground mb-4" />
              <h3 className="font-medium mb-2 text-sm md:text-base">Your cart is empty</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Add some products to get started!
              </p>
            </div>
          ) : (
            <div className="space-y-3 md:space-y-4 p-3 md:p-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-muted/30 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 md:w-16 md:h-16 object-cover rounded"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-xs md:text-sm line-clamp-2">{item.name}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">₹{item.price}</p>
                    
                    <div className="flex items-center gap-1 md:gap-2 mt-1 md:mt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-5 w-5 md:h-6 md:w-6 p-0"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="text-xs md:text-sm font-medium w-6 md:w-8 text-center">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-5 w-5 md:h-6 md:w-6 p-0"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-medium text-xs md:text-sm">₹{(item.price * item.quantity).toLocaleString()}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                      className="text-destructive hover:text-destructive h-5 w-5 md:h-6 md:w-6 p-0"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>

        {cart.length > 0 && (
          <div className="border-t p-3 md:p-4 space-y-3 md:space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs md:text-sm">
                <span>Subtotal:</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm">
                <span>Shipping:</span>
                <span>{total > 999 ? 'Free' : '₹50'}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-medium text-sm md:text-base">
                <span>Total:</span>
                <span>₹{(total + (total > 999 ? 0 : 50)).toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Button variant="gradient" className="w-full text-xs md:text-sm">
                Proceed to Checkout
              </Button>
              <Button 
                variant="outline" 
                className="w-full text-xs md:text-sm"
                onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Cart;