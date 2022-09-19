import { Box, Flex, Skeleton, Spinner } from '@chakra-ui/react';

const Loading = () => {
    return (
        <Box minW={'100vh'} minH={'100vh'}>
            <Flex justifyContent={'center'} alignItems={'center'}>
                <Spinner />
            </Flex>
        </Box>
    );
};

export default Loading;
