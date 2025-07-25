import React from 'react';
import Layout from '@/components/layout/Layout';
import Section from '@/components/layout/Section';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '@/utils/animations';

export default function Conditions() {
  return (
    <Layout
      title="Privacy & Terms - Mosaïk"
      description="Mosaïk's privacy policy and terms of service. Simple, clear, and user-friendly."
    >
      <Section className="pt-32 pb-16" background="primary">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy & <span className="text-gradient">Terms</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Simple, clear policies that respect your privacy and rights.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-16">
            {/* Privacy Policy Section */}
            <div className="bg-bg-surface p-8 rounded-2xl border border-border-light">
              <h2 className="text-2xl font-bold mb-6 text-text-primary">Privacy Policy</h2>
              
              <div className="space-y-6 text-text-secondary">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">What We Collect</h3>
                  <p>
                    Mosaïk is designed with privacy in mind. We collect minimal data to provide our service:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Basic usage analytics (anonymous)</li>
                    <li>Crash reports (to improve stability)</li>
                    <li>Email (if you contact us)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">What We Don't Collect</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Your workspace layouts or window arrangements</li>
                    <li>Content from your applications</li>
                    <li>Personal files or documents</li>
                    <li>Browsing history or website data</li>
                    <li>Any personally identifiable information (unless you provide it)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Data Storage</h3>
                  <p>
                    All your workspace configurations are stored locally on your device. 
                    We don't have access to your layouts, preferences, or any personal data.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Third Parties</h3>
                  <p>
                    We don't sell, trade, or share your data with third parties. Period.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Updates</h3>
                  <p>
                    If we update this policy, we'll notify you through the app or our website.
                  </p>
                </div>
              </div>
            </div>

            {/* Terms of Service Section */}
            <div className="bg-bg-surface p-8 rounded-2xl border border-border-light">
              <h2 className="text-2xl font-bold mb-6 text-text-primary">Terms of Service</h2>
              
              <div className="space-y-6 text-text-secondary">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">License</h3>
                  <p>
                    Mosaïk is released under the CC0 license. This means:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>You can use it for any purpose</li>
                    <li>You can modify and distribute it</li>
                    <li>No attribution required (though appreciated!)</li>
                    <li>It's completely free, forever</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Warranty</h3>
                  <p>
                    Mosaïk is provided "as is" without warranty of any kind. 
                    We're not responsible for any issues that may arise from using the software.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Acceptable Use</h3>
                  <p>
                    Use Mosaïk responsibly:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Don't use it for illegal activities</li>
                    <li>Don't try to break or exploit the software</li>
                    <li>Be respectful in any community interactions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Changes</h3>
                  <p>
                    We may update these terms occasionally. Continued use means you accept any changes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Contact</h3>
                  <p>
                    Questions about these terms? Email us at{' '}
                    <a 
                      href="mailto:contact@gabadev.com" 
                      className="text-cta-primary hover:text-cta-hover transition-colors"
                    >
                      contact@gabadev.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Open Source Note */}
            <div className="bg-accent-emerald/10 border border-accent-emerald/20 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-accent-emerald mb-4">Open Source & Community Driven</h3>
              <p className="text-text-secondary mb-4">
                Mosaïk is completely open source under CC0 license. 
                You can view the source code, contribute, or fork the project.
              </p>
              <a 
                href="https://github.com/gaba-dev/mosaik" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-emerald hover:text-accent-emerald/80 transition-colors font-medium"
              >
                View on GitHub
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mt-16">
            <p className="text-text-muted">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </motion.div>
        </motion.div>
      </Section>
    </Layout>
  );
}
