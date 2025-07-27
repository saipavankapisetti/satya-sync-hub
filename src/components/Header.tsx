import { Search, ShoppingCart, User, Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useStore } from '@/contexts/StoreContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import CategoriesDropdown from './CategoriesDropdown';
import CoursesDropdown from './CoursesDropdown';

const Header = () => {
  const { state, dispatch } = useStore();
  const { cart, searchQuery } = state;
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Top bar - Hidden on mobile */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-gray-600 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Mail className="h-3 w-3" />
              support@satyaelectronics.com
            </span>
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              +91 9876543210
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Free shipping on orders above ₹999</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent cursor-pointer"
              onClick={() => navigate('/')}
            >
              SatyaElectronics Hub
            </h1>
          </div>

          {/* Search bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <form onSubmit={(e) => {
              e.preventDefault();
              if (searchQuery.trim()) {
                navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
              }
            }} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search for electronics, components, gadgets..."
                value={searchQuery}
                onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
                className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                aria-label="Search products"
              />
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Mobile search button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open search menu"
            >
              <Search className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="relative"
              aria-label="Open shopping cart"
            >
              <ShoppingCart className="h-4 w-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs">
                  {totalItems}
                </Badge>
              )}
            </Button>

            {/* Login button - Single login button for both mobile and desktop */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/login')}
              className="hidden sm:flex"
              aria-label="Login to account"
            >
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>

            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleMobileMenu}
              className="md:hidden"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Navigation bar */}
        <div className="hidden md:flex items-center justify-center py-2 border-t border-gray-200">
          <nav className="flex items-center gap-6 text-sm">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')}
              className={isActiveRoute('/') ? 'bg-blue-100 text-blue-800 font-medium rounded' : ''}
            >
              Home
            </Button>
            <CategoriesDropdown />
            <CoursesDropdown />
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/category/arduino')}
              className={isActiveRoute('/category/arduino') ? 'bg-blue-100 text-blue-800 font-medium rounded' : ''}
            >
              Arduino
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/category/raspberry-pi')}
              className={isActiveRoute('/category/raspberry-pi') ? 'bg-blue-100 text-blue-800 font-medium rounded' : ''}
            >
              Raspberry Pi
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/category/sensors')}
              className={isActiveRoute('/category/sensors') ? 'bg-blue-100 text-blue-800 font-medium rounded' : ''}
            >
              Sensors
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/category/motors')}
              className={isActiveRoute('/category/motors') ? 'bg-blue-100 text-blue-800 font-medium rounded' : ''}
            >
              Motors
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/iot')}
              className={isActiveRoute('/iot') ? 'bg-blue-100 text-blue-800 font-medium rounded' : ''}
            >
              IoT
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/robotics')}
              className={isActiveRoute('/robotics') ? 'bg-blue-100 text-blue-800 font-medium rounded' : ''}
            >
              Robotics
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/projects')}
              className={isActiveRoute('/projects') ? 'bg-blue-100 text-blue-800 font-medium rounded' : ''}
            >
              Projects
            </Button>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            {/* Mobile search */}
            <div className="p-4 border-b border-gray-200">
              <form onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                  setIsMobileMenuOpen(false);
                }
              }} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search for electronics, components, gadgets..."
                  value={searchQuery}
                  onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
                  className="pl-10 pr-4 py-2 w-full"
                  aria-label="Search products"
                />
              </form>
            </div>

            {/* Mobile navigation */}
            <div className="p-4 space-y-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }}
              >
                Home
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => { navigate('/categories'); setIsMobileMenuOpen(false); }}
              >
                Categories
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => { navigate('/courses'); setIsMobileMenuOpen(false); }}
              >
                Courses
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => { navigate('/category/arduino'); setIsMobileMenuOpen(false); }}
              >
                Arduino
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => { navigate('/category/raspberry-pi'); setIsMobileMenuOpen(false); }}
              >
                Raspberry Pi
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => { navigate('/category/sensors'); setIsMobileMenuOpen(false); }}
              >
                Sensors
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => { navigate('/category/motors'); setIsMobileMenuOpen(false); }}
              >
                Motors
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => { navigate('/iot'); setIsMobileMenuOpen(false); }}
              >
                IoT
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => { navigate('/robotics'); setIsMobileMenuOpen(false); }}
              >
                Robotics
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => { navigate('/projects'); setIsMobileMenuOpen(false); }}
              >
                Projects
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => { navigate('/about'); setIsMobileMenuOpen(false); }}
              >
                About
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => { navigate('/contact'); setIsMobileMenuOpen(false); }}
              >
                Contact
              </Button>
            </div>
            
            {/* Mobile contact info */}
            <div className="py-4 border-t border-gray-200 space-y-2 text-sm text-gray-600 px-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                support@satyaelectronics.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 9876543210
              </div>
              <div className="text-xs">
                Free shipping on orders above ₹999
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;