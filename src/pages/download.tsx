import React from 'react';
import Layout from '@/components/layout/Layout';
import Section from '@/components/layout/Section';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '@/utils/animations';
import { CheckmarkIcon, ArrowRightIcon, MailIcon, GitHubIcon } from '@/components/icons/IconSystem';

export default function Download() {
  return (
    <Layout
      title="Download Mosaïk - Free"
      description="Download Mosaïk for free. Organize your digital workspace today."
    >
      <Section className="pt-32 min-h-[80vh] flex items-center justify-center" background="hero">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="mb-6 px-4 py-2 inline-flex items-center gap-2 bg-cta-primary/10 text-cta-primary rounded-full text-sm font-medium">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cta-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cta-primary"></span>
              </span>
              Free download • No credit card required
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Download <span className="text-gradient">Mosaïk</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Available for macOS, Windows, and Linux.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-12">
            
            <div className="bg-bg-surface p-8 rounded-2xl border border-border-light elevation-2">
              <h2 className="text-2xl font-bold mb-6 text-text-primary">What you get</h2>
              <ul className="text-left space-y-4">
                {[
                  'Window groups and layouts',
                  'Universal tabs for any app',
                  'One-click project switching',
                  'Cross-platform sync',
                  'Keyboard shortcuts',
                  'Multi-monitor support'
                ].map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center"
                  >
                    <CheckmarkIcon className="text-cta-primary mr-3 flex-shrink-0" size={18} />
                    <span className="text-text-secondary">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="bg-bg-surface p-8 rounded-2xl border border-border-light elevation-2">
              <h2 className="text-2xl font-bold mb-6 text-text-primary">System requirements</h2>
              <div className="text-left space-y-6">
                <div>
                  <h3 className="font-semibold text-cta-primary mb-2">macOS</h3>
                  <p className="text-text-secondary text-sm">macOS 11+ • Apple Silicon & Intel</p>
                </div>
                <div>
                  <h3 className="font-semibold text-cta-primary mb-2">Windows</h3>
                  <p className="text-text-secondary text-sm">Windows 10 (1903+) or Windows 11</p>
                </div>
                <div>
                  <h3 className="font-semibold text-cta-primary mb-2">Linux</h3>
                  <p className="text-text-secondary text-sm">Ubuntu 18.04+ • Fedora 32+ • Arch</p>
                </div>
                <div className="pt-4 border-t border-border-light">
                  <p className="text-text-secondary text-sm">8GB RAM recommended • ~200MB storage</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="space-y-4 mb-16">
            <div className="bg-accent-amber/10 text-accent-amber px-6 py-4 rounded-xl border border-accent-amber/20 mb-6">
              <p className="text-lg font-medium">🚧 Coming Soon</p>
              <p className="text-sm opacity-90 mt-2">
                Mosaïk is currently in development. Stay updated!
              </p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={fadeInUp} className="border-t border-border-light pt-16">
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              
              <div className="bg-bg-surface p-6 rounded-xl border border-border-light text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent-blue/20 flex items-center justify-center">
                  <MailIcon className="text-accent-blue" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">Get in Touch</h3>
                <p className="text-text-secondary text-sm mb-4">
                  Questions or feedback? We'd love to hear from you.
                </p>
                <a
                  href="mailto:contact@gabadev.com"
                  className="inline-flex items-center gap-2 text-cta-primary hover:text-cta-hover transition-colors font-medium text-sm"
                >
                  contact@gabadev.com
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-bg-surface p-6 rounded-xl border border-border-light text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent-purple/20 flex items-center justify-center">
                  <GitHubIcon className="text-accent-purple" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">Open Source</h3>
                <p className="text-text-secondary text-sm mb-4">
                  Follow development progress on GitHub.
                </p>
                <a
                  href="https://github.com/gaba-dev/mosaik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cta-primary hover:text-cta-hover transition-colors font-medium text-sm"
                >
                  github/gaba-dev/mosaik
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-text-muted text-sm">
                CC0 Licensed • Fully open source • Community driven
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Section>
    </Layout>
  );
}
