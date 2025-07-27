import React from 'react';
import { cn } from '@/lib/utils';

export interface ResponsiveGridProps {
  // Grid configuration
  cols?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  
  // Gap configuration
  gap?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  
  // Layout variants
  variant?: 'default' | 'masonry' | 'auto-fit' | 'auto-fill';
  
  // Styling
  className?: string;
  
  // Children
  children: React.ReactNode;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  cols = { sm: 1, md: 2, lg: 3, xl: 4, '2xl': 5 },
  gap = { sm: 4, md: 6, lg: 8, xl: 8 },
  variant = 'default',
  className,
  children
}) => {
  const getGridCols = () => {
    const colClasses = [];
    
    if (cols.sm) colClasses.push(`grid-cols-${cols.sm}`);
    if (cols.md) colClasses.push(`md:grid-cols-${cols.md}`);
    if (cols.lg) colClasses.push(`lg:grid-cols-${cols.lg}`);
    if (cols.xl) colClasses.push(`xl:grid-cols-${cols.xl}`);
    if (cols['2xl']) colClasses.push(`2xl:grid-cols-${cols['2xl']}`);
    
    return colClasses.join(' ');
  };

  const getGridGap = () => {
    const gapClasses = [];
    
    if (gap.sm) gapClasses.push(`gap-${gap.sm}`);
    if (gap.md) gapClasses.push(`md:gap-${gap.md}`);
    if (gap.lg) gapClasses.push(`lg:gap-${gap.lg}`);
    if (gap.xl) gapClasses.push(`xl:gap-${gap.xl}`);
    
    return gapClasses.join(' ');
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'masonry':
        return 'columns-1 md:columns-2 lg:columns-3 xl:columns-4 space-y-4';
      case 'auto-fit':
        return 'grid auto-cols-fr grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]';
      case 'auto-fill':
        return 'grid auto-cols-fr grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]';
      default:
        return `grid ${getGridCols()} ${getGridGap()}`;
    }
  };

  return (
    <div className={cn(getVariantClasses(), className)}>
      {children}
    </div>
  );
};

export default ResponsiveGrid; 