import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';
import { LogoIcon, MenuIcon, CloseIcon } from '@/components/icons/IconSystem';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-secondary/95 backdrop-blur-md border-b border-border-light py-3">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <LogoIcon className="text-accent-primary group-hover:text-accent-hover transition-colors mr-2" />
              <span className="text-2xl font-bold text-gradient">
                Mosaïk
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/#problem" className="text-text-secondary hover:text-text-primary transition-colors">
              Why You Need It
            </Link>
            <Link href="/#how-it-works" className="text-text-secondary hover:text-text-primary transition-colors">
              How It Works
            </Link>
          </nav>
          
          <div className="hidden lg:block">
            <Link 
              href="/download" 
              className="inline-flex items-center gap-2 text-cta-primary hover:text-cta-hover transition-colors font-medium text-sm"
            >
              Free Download
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-text-primary rounded-lg hover:bg-bg-surface"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-bg-secondary/95 backdrop-blur-md border-t border-border-light"
          >
            <Container className="py-4">
              <nav className="flex flex-col space-y-4">
                <Link href="/#problem" className="text-text-secondary hover:text-text-primary transition-colors">
                  Why You Need It
                </Link>
                <Link href="/#how-it-works" className="text-text-secondary hover:text-text-primary transition-colors">
                  How It Works
                </Link>
                <Link href="/download" className="text-cta-primary hover:text-cta-hover transition-colors font-medium">
                  Try For Free
                </Link>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;  
