import { Search, ShoppingCart, User, Menu, X, Phone, Mail, Heart } from 'lucide-react';
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
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar - Hidden on mobile */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail className="h-3 w-3" />
              <a href="mailto:support@satyaelectronics.com" className="hover:underline">
                support@satyaelectronics.com
              </a>
            </span>
            <span className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Phone className="h-3 w-3" />
              <a href="tel:+919876543210" className="hover:underline">
                +91 9876543210
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-green-600 dark:text-green-400 font-medium">
              Free shipping on orders above ₹999
            </span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent cursor-pointer hover:from-blue-700 hover:to-blue-900 transition-all duration-200"
              onClick={() => navigate('/')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate('/');
                }
              }}
              aria-label="Go to homepage"
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
                className="pl-10 pr-4 py-2 w-full border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 transition-all duration-200"
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
              className="md:hidden hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open search menu"
            >
              <Search className="h-4 w-4" />
            </Button>

            {/* Wishlist button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/wishlist')}
              className="relative hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              aria-label="View wishlist"
            >
              <Heart className="h-4 w-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Wishlist</span>
              {state.wishlist.length > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs animate-pulse">
                  {state.wishlist.length}
                </Badge>
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="relative hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              aria-label="Open shopping cart"
            >
              <ShoppingCart className="h-4 w-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs animate-pulse">
                  {totalItems}
                </Badge>
              )}
            </Button>

            {/* Login button - Single login button for both mobile and desktop */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/login')}
              className="hidden sm:flex hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
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
              className="md:hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Navigation bar */}
        <div className="hidden md:flex items-center justify-center py-2 border-t border-gray-200 dark:border-gray-700">
          <nav className="flex items-center gap-4 lg:gap-6 text-sm">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')}
              className={`transition-all duration-200 ${
                isActiveRoute('/') 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-lg' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Home
            </Button>
            <CategoriesDropdown />
            <CoursesDropdown />
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/category/arduino')}
              className={`transition-all duration-200 ${
                isActiveRoute('/category/arduino') 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-lg' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Arduino
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/category/raspberry-pi')}
              className={`transition-all duration-200 ${
                isActiveRoute('/category/raspberry-pi') 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-lg' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Raspberry Pi
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/category/sensors')}
              className={`transition-all duration-200 ${
                isActiveRoute('/category/sensors') 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-lg' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Sensors
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/category/motors')}
              className={`transition-all duration-200 ${
                isActiveRoute('/category/motors') 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-lg' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Motors
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/iot')}
              className={`transition-all duration-200 ${
                isActiveRoute('/iot') 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-lg' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              IoT
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/robotics')}
              className={`transition-all duration-200 ${
                isActiveRoute('/robotics') 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-lg' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Robotics
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/projects')}
              className={`transition-all duration-200 ${
                isActiveRoute('/projects') 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-lg' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Projects
            </Button>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 animate-slide-in-from-top">
            {/* Mobile search */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
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
                  className="pl-10 pr-4 py-2 w-full border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  aria-label="Search products"
                />
              </form>
            </div>

            {/* Mobile navigation */}
            <div className="p-4 space-y-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }}
              >
                Home
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => { navigate('/categories'); setIsMobileMenuOpen(false); }}
              >
                Categories
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => { navigate('/courses'); setIsMobileMenuOpen(false); }}
              >
                Courses
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => { navigate('/wishlist'); setIsMobileMenuOpen(false); }}
              >
                Wishlist
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => { navigate('/category/arduino'); setIsMobileMenuOpen(false); }}
              >
                Arduino
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => { navigate('/category/raspberry-pi'); setIsMobileMenuOpen(false); }}
              >
                Raspberry Pi
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => { navigate('/category/sensors'); setIsMobileMenuOpen(false); }}
              >
                Sensors
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => { navigate('/category/motors'); setIsMobileMenuOpen(false); }}
              >
                Motors
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => { navigate('/iot'); setIsMobileMenuOpen(false); }}
              >
                IoT
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => { navigate('/robotics'); setIsMobileMenuOpen(false); }}
              >
                Robotics
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => { navigate('/projects'); setIsMobileMenuOpen(false); }}
              >
                Projects
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => { navigate('/about'); setIsMobileMenuOpen(false); }}
              >
                About
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => { navigate('/contact'); setIsMobileMenuOpen(false); }}
              >
                Contact
              </Button>
            </div>
            
            {/* Mobile contact info */}
            <div className="py-4 border-t border-gray-200 dark:border-gray-700 space-y-2 text-sm text-gray-600 dark:text-gray-400 px-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@satyaelectronics.com" className="hover:underline">
                  support@satyaelectronics.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+919876543210" className="hover:underline">
                  +91 9876543210
                </a>
              </div>
              <div className="text-xs text-green-600 dark:text-green-400 font-medium">
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