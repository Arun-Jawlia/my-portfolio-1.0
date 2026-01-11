import { memo, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FilterButtonProps {
  isActive: boolean;
  onClick: () => void;
  icon?: ReactNode;
  label: string;
  count: number;
}

export const FilterButton = memo(({ 
  isActive, 
  onClick, 
  icon, 
  label, 
  count 
}: FilterButtonProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
      isActive
        ? 'bg-primary text-primary-foreground shadow-lg'
        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
    )}
  >
    {icon}
    {label}
    <span className={cn(
      "ml-1 px-2 py-0.5 text-xs rounded-full",
      isActive
        ? 'bg-primary-foreground/20 text-primary-foreground'
        : 'bg-muted text-muted-foreground'
    )}>
      {count}
    </span>
  </button>
));

FilterButton.displayName = 'FilterButton';
