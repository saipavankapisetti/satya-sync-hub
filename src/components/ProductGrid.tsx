import { useEffect } from 'react';
import ProductCard from './ProductCard';
import { useStore } from '@/contexts/StoreContext';
import { mockProducts } from '@/data/mockProducts';

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
      <div className="text-center py-16">
        <h3 className="text-2xl font-semibold mb-4">No products found</h3>
        <p className="text-gray-600">
          {searchQuery ? 
            `No products match "${searchQuery}". Try adjusting your search.` :
            'No products in this category. Try selecting a different category.'
          }
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;