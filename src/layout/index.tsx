import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

import Header from '../components/Header';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box minHeight='100vh' bgColor='#191932'>
            <Header />
            <Box margin='auto'>
                <Box p={4}>{children}</Box>
            </Box>
        </Box>
    );
};

export default Layout;
