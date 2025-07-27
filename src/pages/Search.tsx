import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Search as SearchIcon, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { StoreProvider, useStore } from '@/contexts/StoreContext';
import { mockProducts } from '@/data/mockProducts';

const SearchContent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { state, dispatch } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    brand: 'all'
  });

  const query = searchParams.get('q') || '';

  useEffect(() => {
    // Initialize products
    dispatch({ type: 'SET_PRODUCTS', payload: mockProducts });
    setSearchQuery(query);
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
  }, [dispatch, query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
      dispatch({ type: 'SET_SEARCH_QUERY', payload: searchQuery.trim() });
    }
  };

  const filteredProducts = state.products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(query.toLowerCase()) ||
                         product.description.toLowerCase().includes(query.toLowerCase()) ||
                         product.brand.toLowerCase().includes(query.toLowerCase()) ||
                         product.category.toLowerCase().includes(query.toLowerCase());
    
    const matchesCategory = filters.category === 'all' || product.category === filters.category;
    
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(state.products.map(p => p.category))];
  const brands = [...new Set(state.products.map(p => p.brand))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Search Header */}
      <section className="bg-gradient-card border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Search Results
            </h1>
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search for products, categories, brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4"
                />
              </div>
              <Button type="submit" size="sm">
                Search
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Search Results */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-4 w-4" />
                <h3 className="font-semibold">Filters</h3>
              </div>
              
              {/* Category Filter */}
              <div className="space-y-2 mb-4">
                <h4 className="text-sm font-medium">Category</h4>
                <select 
                  value={filters.category}
                  onChange={(e) => setFilters({...filters, category: e.target.value})}
                  className="w-full p-2 border rounded text-sm"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Brand Filter */}
              <div className="space-y-2 mb-4">
                <h4 className="text-sm font-medium">Brand</h4>
                <select 
                  value={filters.brand}
                  onChange={(e) => setFilters({...filters, brand: e.target.value})}
                  className="w-full p-2 border rounded text-sm"
                >
                  <option value="all">All Brands</option>
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Price Range</h4>
                <select 
                  value={filters.priceRange}
                  onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                  className="w-full p-2 border rounded text-sm"
                >
                  <option value="all">All Prices</option>
                  <option value="0-500">Under ₹500</option>
                  <option value="500-1000">₹500 - ₹1000</option>
                  <option value="1000-5000">₹1000 - ₹5000</option>
                  <option value="5000+">Above ₹5000</option>
                </select>
              </div>
            </Card>
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg md:text-xl font-semibold mb-2">
                  {query ? `Search results for "${query}"` : 'All Products'}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {filteredProducts.length} products found
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <Card className="p-12 text-center">
                <SearchIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  No products found
                </h3>
                <p className="text-muted-foreground mb-4">
                  {query ? 
                    `No products match "${query}". Try adjusting your search terms or filters.` :
                    'No products available with the current filters.'
                  }
                </p>
                <div className="space-x-2">
                  <Button variant="outline" onClick={() => setFilters({category: 'all', priceRange: 'all', brand: 'all'})}>
                    Clear Filters
                  </Button>
                  <Button onClick={() => setSearchQuery('')}>
                    Browse All Products
                  </Button>
                </div>
              </Card>
            )}

            {/* Search Results */}
            {filteredProducts.length > 0 && (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105">
                    <div className={viewMode === 'list' ? 'flex gap-4 p-4' : ''}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`object-cover rounded ${viewMode === 'list' ? 'w-24 h-24' : 'w-full h-48'}`}
                      />
                      <div className={viewMode === 'list' ? 'flex-1' : 'p-4'}>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {product.brand}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {product.category}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-sm md:text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground mb-3 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-primary">
                            ₹{product.price.toLocaleString()}
                          </span>
                          <Button size="sm" variant="outline">
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const Search = () => {
  return (
    <StoreProvider>
      <SearchContent />
    </StoreProvider>
  );
};

export default Search; 