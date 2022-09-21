import { ChevronLeftIcon, StarIcon } from '@chakra-ui/icons';
import {
    Box,
    Heading,
    HStack,
    Stack,
    Tag,
    TagLabel,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import ButtonComponent from '../shared/Button';
import Images from '../shared/Image';

const MovieDetail: React.FC<any> = ({
    title,
    tagline,
    overview,
    releaseDate,
    genres,
    posterPath,
    runtime,
    voteAverage,
}) => {
    const router = useRouter();
    const width = useBreakpointValue({ base: '400', md: '800' });
    const height = useBreakpointValue({ base: '400', md: '800' });

    return (
        <Box px={4} mb={4}>
            <Stack pos='relative' align={'center'} margin={'0 auto'}>
                <Images
                    width={width}
                    height={height}
                    objectFit={'cover'}
                    loader={() =>
                        `https://image.tmdb.org/t/p/w500/${posterPath}`
                    }
                    src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
                    alt={title}
                />
                <Stack
                    direction={'row'}
                    pos='absolute'
                    right={2}
                    top={2}
                    alignItems={'center'}
                    px={4}
                    py={1.5}
                    bgColor={'rgba(0, 0, 0, .5)'}
                    rounded={'lg'}
                >
                    <StarIcon color='gold' w={5} h={5} />
                    <Text color={'#fff'} fontSize='lg'>
                        {Number(voteAverage).toFixed(1)}
                    </Text>
                </Stack>
                <Stack pos='absolute' left={2} top={2}>
                    <ButtonComponent
                        rounded='lg'
                        type='submit'
                        variant='primary'
                        width='full'
                        icon={<ChevronLeftIcon />}
                        onClick={() => router.back()}
                    >
                        Back
                    </ButtonComponent>
                </Stack>
                <Stack
                    pos={'absolute'}
                    textAlign={'center'}
                    bottom={0}
                    bgColor={'rgba(0, 0, 0, .5)'}
                    minW={'100%'}
                    padding={2}
                >
                    <Heading
                        fontSize={'xl'}
                        fontFamily={'body'}
                        fontWeight={500}
                        color='#fff'
                    >
                        {title}
                    </Heading>
                    <Text
                        color={'#C1C1C1'}
                        fontSize='md'
                        mt={0}
                        textAlign={'center'}
                    >
                        {new Date(releaseDate).getFullYear()} | {runtime}{' '}
                        minutes
                    </Text>
                </Stack>
            </Stack>
            <HStack spacing={4} my={4}>
                {genres.map((genre: { id: number; name: string }) => (
                    <Tag
                        size={'md'}
                        key={genre.id}
                        borderRadius='full'
                        variant='solid'
                        bgColor='#fd0181'
                    >
                        <TagLabel>{genre.name}</TagLabel>
                    </Tag>
                ))}
            </HStack>
            <Stack mt={4}>
                <Heading
                    fontSize={{ base: 'md', md: 'lg' }}
                    fontFamily={'body'}
                    fontWeight={500}
                    color='#fff'
                >
                    Story Line
                </Heading>
                <Text
                    color={'#C1C1C1'}
                    fontSize={{ base: 'xs', md: 'md' }}
                    mt={0}
                >
                    {`"${tagline}". ${overview}`}
                </Text>
            </Stack>
        </Box>
    );
};

export default MovieDetail;
