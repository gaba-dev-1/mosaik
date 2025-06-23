import React from 'react';
import Container from './Container';
import { motion, MotionProps } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import { SectionProps } from '@/types';

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'primary',
  animate = false,
  animationProps,
}) => {
  const backgroundClasses: Record<string, string> = {
    'primary': 'bg-primary-section',
    'secondary': 'bg-secondary-section',
    'hero': 'bg-hero-section',
  };

  const sectionClasses = `section ${backgroundClasses[background]} relative ${className}`;

  if (animate) {
    const motionProps: MotionProps = {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-100px 0px" },
      variants: fadeInUp,
      ...(animationProps as MotionProps)
    };

    return (
      <motion.section
        id={id}
        className={sectionClasses}
        {...motionProps}
      >
        <Container>{children}</Container>
      </motion.section>
    );
  }

  return (
    <section
      id={id}
      className={sectionClasses}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
