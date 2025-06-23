import { type AppProps } from 'next/app';
import { inter, plusJakartaSans, jetBrainsMono } from '@/utils/fonts';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${plusJakartaSans.variable} ${jetBrainsMono.variable} bg-primary`}>
      <Component {...pageProps} />
    </main>
  );
}
