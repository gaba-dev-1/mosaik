import React from 'react';
import Link from 'next/link';
import { motion, MotionProps } from 'framer-motion';
import { ButtonProps } from '@/types';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  animate = false,
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  ...props
}: ButtonProps): React.ReactElement => {
  const baseClasses = [
    'relative btn flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 gap-2 will-change-transform',
    variant === 'primary' 
      ? 'bg-cta-primary text-text-inverse shadow-[0_4px_12px_rgba(59,130,246,0.3)] hover:bg-cta-hover hover:shadow-[0_4px_16px_rgba(59,130,246,0.4)]' 
      : variant === 'secondary'
      ? 'bg-bg-elevated text-text-primary border border-border-light hover:bg-bg-surface focus:ring-cta-primary'
      : 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-surface focus:ring-cta-primary',
    size === 'sm' ? 'text-sm px-4 py-2 rounded-lg' : size === 'lg' ? 'text-lg px-8 py-4 rounded-xl' : 'text-base px-6 py-3 rounded-xl',
    fullWidth ? 'w-full' : '',
    loading || disabled ? 'opacity-70 cursor-not-allowed' : '',
    icon && iconPosition === 'left' ? 'space-x-2' : '',
    icon && iconPosition === 'right' ? 'flex-row-reverse space-x-reverse space-x-2' : '',
    className
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
      )}
      <span className={`flex items-center ${loading ? 'opacity-0' : ''}`}>
        {icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </span>
    </>
  );

  if (animate) {
    const motionProps: MotionProps = {
      whileHover: { scale: 1.02, y: -2 },
      whileTap: { scale: 0.98 },
      transition: { type: 'spring', stiffness: 400, damping: 25 },
    };

    const buttonContent = (
      <motion.span
        className="w-full h-full flex items-center justify-center"
        {...motionProps}
      >
        {content}
      </motion.span>
    );

    if ('href' in props && props.href !== undefined) {
      return (
        <Link className={baseClasses} href={props.href} {...props}>
          {buttonContent}
        </Link>
      );
    }

    return (
      <button 
        className={baseClasses} 
        disabled={loading || disabled} 
        type={props.type || 'button'}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }

  if ('href' in props && props.href !== undefined) {
    return (
      <Link className={baseClasses} href={props.href} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      className={baseClasses} 
      disabled={loading || disabled} 
      type={props.type || 'button'}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
