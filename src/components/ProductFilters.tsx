import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter, X } from 'lucide-react';

interface ProductFiltersProps {
  onFiltersChange: (filters: FilterState) => void;
}

interface FilterState {
  priceRange: [number, number];
  brands: string[];
  categories: string[];
}

const ProductFilters = ({ onFiltersChange }: ProductFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 10000],
    brands: [],
    categories: []
  });

  const availableBrands = ['Arduino', 'Raspberry Pi', 'ESP32', 'STM32', 'Microchip', 'Texas Instruments'];
  const availableCategories = ['Microcontrollers', 'Sensors', 'Motors', 'Displays', 'IoT', 'Robotics'];

  const handlePriceChange = (value: number[]) => {
    const newFilters: FilterState = { 
      ...filters, 
      priceRange: [value[0], value[1]] as [number, number] 
    };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleBrandToggle = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    
    const newFilters: FilterState = { ...filters, brands: newBrands };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleCategoryToggle = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    
    const newFilters: FilterState = { ...filters, categories: newCategories };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const newFilters: FilterState = {
      priceRange: [0, 10000],
      brands: [],
      categories: []
    };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const activeFiltersCount = filters.brands.length + filters.categories.length;

  return (
    <div className="mb-6">
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between"
        >
          <span className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {activeFiltersCount}
              </Badge>
            )}
          </span>
        </Button>
      </div>

      {/* Desktop Filters */}
      <div className={`lg:block ${isOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Filters</h3>
            <div className="flex items-center gap-2">
              {activeFiltersCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-red-600 hover:text-red-700"
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="lg:hidden"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="font-medium mb-3">Price Range</h4>
            <div className="space-y-3">
              <Slider
                value={filters.priceRange}
                onValueChange={handlePriceChange}
                max={10000}
                min={0}
                step={100}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>₹{filters.priceRange[0].toLocaleString()}</span>
                <span>₹{filters.priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-medium mb-3">Brands</h4>
            <div className="space-y-2">
              {availableBrands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={filters.brands.includes(brand)}
                    onCheckedChange={() => handleBrandToggle(brand)}
                  />
                  <label
                    htmlFor={`brand-${brand}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-medium mb-3">Categories</h4>
            <div className="space-y-2">
              {availableCategories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={filters.categories.includes(category)}
                    onCheckedChange={() => handleCategoryToggle(category)}
                  />
                  <label
                    htmlFor={`category-${category}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Active Filters */}
          {activeFiltersCount > 0 && (
            <div>
              <h4 className="font-medium mb-2">Active Filters</h4>
              <div className="flex flex-wrap gap-2">
                {filters.brands.map((brand) => (
                  <Badge
                    key={`brand-${brand}`}
                    variant="secondary"
                    className="cursor-pointer hover:bg-red-100"
                    onClick={() => handleBrandToggle(brand)}
                  >
                    {brand} <X className="h-3 w-3 ml-1" />
                  </Badge>
                ))}
                {filters.categories.map((category) => (
                  <Badge
                    key={`category-${category}`}
                    variant="secondary"
                    className="cursor-pointer hover:bg-red-100"
                    onClick={() => handleCategoryToggle(category)}
                  >
                    {category} <X className="h-3 w-3 ml-1" />
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductFilters; 