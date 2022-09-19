import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

import Header from '../components/Header';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    //   const { authLoading } = useAuth();

    //   if (authLoading) return <LoaderCenter />;

    return (
        <Box minHeight='100vh' maxW={520} bgColor='#191932'>
            <Header />
            <Box maxW={520} margin='auto'>
                <Box p={4}>{children}</Box>
            </Box>
        </Box>
    );
};

export default Layout;
