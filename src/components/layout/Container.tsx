import React from 'react';
import { ContainerProps } from '@/types';

const Container: React.FC<ContainerProps> = ({ 
  children,
  className = '',
  size = 'default',
}) => {
  const sizeClasses = size === 'lg' ? 'max-w-[1400px]' : size === 'xl' ? 'max-w-[1600px]' : 'max-w-7xl';
  
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
