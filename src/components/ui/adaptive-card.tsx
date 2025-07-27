import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface AdaptiveCardProps {
  // Layout variants
  variant?: 'default' | 'featured' | 'compact' | 'detailed' | 'hero';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  // Content
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  icon?: React.ComponentType<{ className?: string }>;
  
  // Metadata
  tags?: string[];
  rating?: number;
  views?: number;
  duration?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  
  // Actions
  primaryAction?: {
    label: string;
    onClick: () => void;
    variant?: 'default' | 'outline' | 'ghost';
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
    variant?: 'default' | 'outline' | 'ghost';
  };
  
  // Styling
  className?: string;
  gradient?: string;
  color?: string;
  
  // Interactive
  onClick?: () => void;
  hover?: boolean;
  
  // Children for custom content
  children?: React.ReactNode;
}

const AdaptiveCard: React.FC<AdaptiveCardProps> = ({
  variant = 'default',
  size = 'md',
  title,
  subtitle,
  description,
  image,
  icon: Icon,
  tags = [],
  rating,
  views,
  duration,
  difficulty,
  primaryAction,
  secondaryAction,
  className,
  gradient,
  color,
  onClick,
  hover = true,
  children
}) => {
  const sizeClasses = {
    sm: 'p-3 text-sm',
    md: 'p-4 text-base',
    lg: 'p-6 text-lg',
    xl: 'p-8 text-xl'
  };

  const variantClasses = {
    default: 'bg-card hover:shadow-card',
    featured: 'bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20',
    compact: 'p-3 space-y-2',
    detailed: 'space-y-4',
    hero: 'bg-gradient-hero text-white border-0'
  };

  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800'
  };

  return (
    <Card
      className={cn(
        'transition-all duration-300',
        sizeClasses[size],
        variantClasses[variant],
        hover && 'hover:shadow-elegant hover:scale-105 cursor-pointer',
        gradient && `bg-gradient-to-br ${gradient}`,
        color && `border-${color}/20`,
        className
      )}
      onClick={onClick}
    >
      {/* Image Section */}
      {image && (
        <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {difficulty && (
            <Badge className="absolute top-2 right-2" variant="secondary">
              {difficulty}
            </Badge>
          )}
        </div>
      )}

      {/* Header Section */}
      {(title || subtitle || Icon) && (
        <CardHeader className={cn('pb-2', variant === 'compact' && 'p-0')}>
          <div className="flex items-start gap-3">
            {Icon && (
              <div className={cn(
                'flex-shrink-0 rounded-lg p-2',
                color ? `bg-${color} text-white` : 'bg-primary text-white'
              )}>
                <Icon className="h-4 w-4" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              {title && (
                <CardTitle className={cn(
                  'line-clamp-2',
                  variant === 'hero' && 'text-white',
                  size === 'sm' && 'text-sm',
                  size === 'lg' && 'text-lg',
                  size === 'xl' && 'text-xl'
                )}>
                  {title}
                </CardTitle>
              )}
              {subtitle && (
                <p className={cn(
                  'text-sm text-muted-foreground mt-1',
                  variant === 'hero' && 'text-white/80'
                )}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </CardHeader>
      )}

      {/* Content Section */}
      <CardContent className={cn('space-y-3', variant === 'compact' && 'p-0')}>
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Description */}
        {description && (
          <p className={cn(
            'text-muted-foreground line-clamp-2',
            variant === 'hero' && 'text-white/80',
            size === 'sm' && 'text-xs',
            size === 'lg' && 'text-base',
            size === 'xl' && 'text-lg'
          )}>
            {description}
          </p>
        )}

        {/* Metadata */}
        {(rating || views || duration) && (
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            {rating && (
              <span className="flex items-center gap-1">
                ⭐ {rating}
              </span>
            )}
            {views && (
              <span>{views} views</span>
            )}
            {duration && (
              <span>⏱️ {duration}</span>
            )}
          </div>
        )}

        {/* Custom Children */}
        {children}

        {/* Actions */}
        {(primaryAction || secondaryAction) && (
          <div className={cn(
            'flex gap-2',
            secondaryAction ? 'justify-between' : 'justify-center'
          )}>
            {primaryAction && (
              <Button
                size={size === 'sm' ? 'sm' : 'default'}
                variant={primaryAction.variant || 'default'}
                onClick={(e) => {
                  e.stopPropagation();
                  primaryAction.onClick();
                }}
                className="flex-1"
              >
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button
                size={size === 'sm' ? 'sm' : 'default'}
                variant={secondaryAction.variant || 'outline'}
                onClick={(e) => {
                  e.stopPropagation();
                  secondaryAction.onClick();
                }}
                className="flex-1"
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AdaptiveCard; 