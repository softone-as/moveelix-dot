import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { AuthContextProvider } from '../src/context/auth';
import { useRouter } from 'next/router';
import ProtectedRoute from '../src/context/ProtectedRoute';

const queryClient = new QueryClient();

const publicRoutes = ['/login', '/register'];

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <AuthContextProvider>
            <ChakraProvider>
                <QueryClientProvider client={queryClient}>
                    {publicRoutes.includes(router.pathname) ? (
                        <Component {...pageProps} />
                    ) : (
                        <ProtectedRoute>
                            <Component {...pageProps} />
                        </ProtectedRoute>
                    )}
                </QueryClientProvider>
            </ChakraProvider>
        </AuthContextProvider>
    );
}

export default MyApp;
