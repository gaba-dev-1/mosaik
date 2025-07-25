import React from 'react';
import Link from 'next/link';
import Container from './Container';
import { LogoIcon } from '@/components/icons/IconSystem';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-secondary border-t border-border-light">
      <Container className="py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <LogoIcon className="text-accent-primary mr-2" />
            <span className="text-xl font-bold text-gradient">
              Mosaïk
            </span>
          </div>
          
          <div className="flex space-x-6">
            <Link href="/conditions" className="text-text-muted hover:text-cta-primary transition-colors">
              Privacy & Terms
            </Link>
            <a href="mailto:contact@gabadev.com" className="text-text-muted hover:text-cta-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border-light text-center">
          <p className="text-text-muted">
            &copy; {new Date().getFullYear()} Mosaïk. CC0 - Fully open source.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
