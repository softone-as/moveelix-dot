import { StarIcon } from '@chakra-ui/icons';
import { Box, Divider, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

interface MovieDetailProps {
    title: string;
    tagline: string;
    overview: string;
    runtime: string;
    genres?: any[];
    releaseDate?: string;
    poster_path?: string;
}

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
    return (
        <Box px={4}>
            <Stack pos='relative' align={'center'} margin={'0 auto'}>
                {/* Image Poster Overlay */}

                <Image
                    width='500'
                    height='800'
                    objectFit={'cover'}
                    loader={() =>
                        `https://image.tmdb.org/t/p/w500/${posterPath}`
                    }
                    src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
                    alt={title}
                    unoptimized
                />
                {/* overlay star */}
                <Stack
                    direction={'row'}
                    pos='absolute'
                    right={2}
                    top={2}
                    alignItems={'center'}
                    px={1.5}
                    bgColor={'rgba(0, 0, 0, .5)'}
                    rounded={'lg'}
                >
                    <StarIcon color='gold' />
                    <Text color={'#fff'}>{Number(voteAverage).toFixed(1)}</Text>
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
                        fontSize='xs'
                        mt={0}
                        textAlign={'center'}
                    >
                        {new Date(releaseDate).getFullYear()} |{' '}
                        {/* {genres[0].name} |{' '} */}
                        {runtime}
                    </Text>
                </Stack>
            </Stack>
            <Stack>
                <Heading
                    fontSize={'md'}
                    fontFamily={'body'}
                    fontWeight={400}
                    color='#fff'
                >
                    Story Line
                </Heading>
                <Text color={'#C1C1C1'} fontSize='xs' mt={0}>
                    {`"${tagline}". ${overview}`}
                </Text>
            </Stack>
        </Box>
    );
};

export default MovieDetail;
