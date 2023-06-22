import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const inter = Inter({ subsets: ['latin'] });
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <div className={inter.className}>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId="1067474376899-8bn30uk5cl68cv6oqic6u0aopsgngg82.apps.googleusercontent.com">
          <Component {...pageProps} />
          <Toaster />
          <ReactQueryDevtools />
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </div>
  );
}
