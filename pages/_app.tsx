import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import mantineCache from '@/mantineCache';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionCache={mantineCache}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
