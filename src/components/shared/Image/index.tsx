import { Box } from '@chakra-ui/react';
import Image from 'next/image';

const Images = (props: any) => {
    const width = props.width.replace('px', '');
    const height = props.height.replace('px', '');
    return (
        <Box w={props.width} h={props.height}>
            <Image {...props} width={+width} height={+height} />
        </Box>
    );
};

export default Images;
