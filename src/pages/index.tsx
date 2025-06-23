import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import ProblemStatement from '@/components/sections/ProblemStatement';
import HowItWorks from '@/components/sections/HowItWorks';

export default function Home() {
  return (
    <Layout
      title="Mosaïk | Organize Your Digital Workspace"
      description="Mosaïk groups windows and browser tabs into organized workspaces. Less clutter, better focus."
    >
      <Hero />
      <ProblemStatement />
      <HowItWorks />
    </Layout>
  );
}
