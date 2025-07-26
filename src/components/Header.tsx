import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useStore } from '@/contexts/StoreContext';
import { useNavigate } from 'react-router-dom';
import CategoriesDropdown from './CategoriesDropdown';
import CoursesDropdown from './CoursesDropdown';

const Header = () => {
  const { state, dispatch } = useStore();
  const { cart, searchQuery } = state;
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-4">
            <span>📧 support@satyaelectronics.com</span>
            <span>📞 +91 9876543210</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Free shipping on orders above ₹999</span>
            <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer"
              onClick={() => navigate('/')}
            >
              SatyaElectronics Hub
            </h1>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search for electronics, components, gadgets..."
                value={searchQuery}
                onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
                className="pl-10 pr-4 py-2 w-full border-input focus:border-primary focus:ring-primary"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="cart"
              size="sm"
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="relative"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
              {totalItems > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs">
                  {totalItems}
                </Badge>
              )}
            </Button>
            <Button variant="ghost" size="sm">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6 py-3 border-t border-border/50">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')}>Home</Button>
          <CategoriesDropdown />
          <CoursesDropdown />
          <Button variant="ghost" size="sm">Arduino</Button>
          <Button variant="ghost" size="sm" onClick={() => navigate('/category/raspberry-pi')}>Raspberry Pi</Button>
          <Button variant="ghost" size="sm" onClick={() => navigate('/category/sensors')}>Sensors</Button>
          <Button variant="ghost" size="sm" onClick={() => navigate('/category/motors')}>Motors</Button>
          <Button variant="ghost" size="sm">IoT</Button>
          <Button variant="ghost" size="sm">Robotics</Button>
          <Button variant="ghost" size="sm">About</Button>
          <Button variant="ghost" size="sm">Contact</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;