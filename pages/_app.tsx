import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import mantineCache from '@/mantineCache';
import Layout from '@/components/Layout';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

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
                  opacity: 0.9,
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
        <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
      </ThirdwebProvider>
    </MantineProvider>
  );
}
