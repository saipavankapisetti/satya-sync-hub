import { useEffect } from 'react';
import ProductCard from './ProductCard';
import { useStore } from '@/contexts/StoreContext';
import { mockProducts } from '@/data/mockProducts';
import { Button } from '@/components/ui/button';

const ProductGrid = () => {
  const { state, dispatch } = useStore();
  const { products, searchQuery, selectedCategory } = state;

  // Initialize products on mount
  useEffect(() => {
    dispatch({ type: 'SET_PRODUCTS', payload: mockProducts });
  }, [dispatch]);

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-16 md:py-20 animate-fade-in">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">No products found</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {searchQuery ? 
                `No products match "${searchQuery}". Try adjusting your search terms.` :
                'No products in this category. Try selecting a different category.'
              }
            </p>
          </div>
          <Button 
            variant="outline" 
            className="px-6 py-3"
            onClick={() => {
              dispatch({ type: 'SET_SEARCH_QUERY', payload: '' });
              dispatch({ type: 'SET_CATEGORY', payload: 'all' });
            }}
          >
            Clear Filters
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
      {filteredProducts.map((product, index) => (
        <div 
          key={product.id} 
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;