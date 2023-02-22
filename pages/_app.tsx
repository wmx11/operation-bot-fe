import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import mantineCache from '@/mantineCache';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionCache={mantineCache}
      theme={{
        colorScheme: 'light',
        components: {
          Container: {
            defaultProps: {
              size: 'md',
            },
          },
          Button: {
            defaultProps: {
              sx: {
                background: '#5E9E5E',
                '&:hover': {
                  background: '#5E9E5E',
                  filter: 'brightness(0.85)',
                },
              },
            },
          },
        },
        defaultRadius: 'lg',
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}
