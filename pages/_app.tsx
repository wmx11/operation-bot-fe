import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import mantineCache from '@/mantineCache';
import Layout from '@/components/Layout';
import { ThirdwebProvider } from '@thirdweb-dev/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionCache={mantineCache}
      theme={{
        colorScheme: 'light',
        black: '#4F4F4F',
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
      <ThirdwebProvider
        activeChain="polygon"
        authConfig={{
          // This domain should match the backend
          domain: process.env.NEXT_PUBLIC_AUTH_DOMAIN || '',
          // Pass the URL of the auth endpoints
          authUrl: '/api/auth',
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThirdwebProvider>
    </MantineProvider>
  );
}
