import { ReactNode } from 'react';
import { Target, Transition, Variants } from 'framer-motion';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface UseCase {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  benefits: string[];
  icon?: ReactNode;
  illustration?: ReactNode;
}

export interface AnimationProps {
  initial?: string | Target;
  animate?: string | Target;
  exit?: string | Target;
  whileInView?: string | Target;
  viewport?: {
    once?: boolean;
    margin?: string;
  };
  transition?: Transition;
  variants?: Variants;
  custom?: number | string;
}

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'primary' | 'secondary' | 'hero';
  animate?: boolean;
  animationProps?: AnimationProps;
}

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'lg' | 'xl';
}

export interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  fullWidth?: boolean;
  animate?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
}
