import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 'all', name: 'All Categories', path: '/categories' },
  { id: 'arduino', name: 'Arduino', path: '/category/arduino' },
  { id: 'raspberry-pi', name: 'Raspberry Pi', path: '/category/raspberry-pi' },
  { id: 'sensors', name: 'Sensors', path: '/category/sensors' },
  { id: 'motors', name: 'Motors & Actuators', path: '/category/motors' },
  { id: 'displays', name: 'Displays', path: '/category/displays' },
  { id: 'communication', name: 'Communication', path: '/category/communication' },
  { id: 'power', name: 'Power Supply', path: '/category/power' },
  { id: 'tools', name: 'Tools & Equipment', path: '/category/tools' },
  { id: 'components', name: 'Electronic Components', path: '/category/components' },
  { id: 'kits', name: 'Learning Kits', path: '/category/kits' },
  { id: 'cables', name: 'Cables & Connectors', path: '/category/cables' },
];

const CategoriesDropdown = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (path: string) => {
    navigate(path);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-1">
          Categories
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 max-h-96 overflow-y-auto">
        {categories.map((category) => (
          <DropdownMenuItem
            key={category.id}
            onClick={() => handleCategoryClick(category.path)}
            className="cursor-pointer"
          >
            {category.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoriesDropdown;