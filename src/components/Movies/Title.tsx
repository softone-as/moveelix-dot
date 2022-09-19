import { Heading } from '@chakra-ui/react';

const Title = ({ heading }: { heading: string }) => {
    return (
        <Heading as='h2' mb={4} size='md' color={'#fff'}>
            {heading}
        </Heading>
    );
};

export default Title;
