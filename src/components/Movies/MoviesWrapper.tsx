import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Title from './Title';

interface MovieWrapperProps {
    children: ReactNode;
    title: string;
}

const MovieSectionWrapper: React.FC<MovieWrapperProps> = ({
    children,
    title,
}) => {
    return (
        <Box mb={8}>
            <Title heading={title} />
            {children}
        </Box>
    );
};

export default MovieSectionWrapper;
