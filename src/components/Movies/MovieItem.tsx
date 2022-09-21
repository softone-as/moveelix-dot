import { StarIcon } from '@chakra-ui/icons';
import { Box, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const MovieItem: React.FC<any> = ({ movie }) => {
    return (
        <Link href={`/movie/${movie.id}`}>
            <a>
                <Box
                    rounded={'lg'}
                    height={'200'}
                    width={'150px'}
                    _hover={{
                        background: '#000',
                        opacity: '0.7',
                    }}
                    pos={'relative'}
                >
                    <Image
                        width='300'
                        height='400'
                        objectFit={'cover'}
                        loader={() =>
                            `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        }
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                        unoptimized
                    />
                    <Text
                        bgColor={'rgba(0, 0, 0, .5)'}
                        color={'#fff'}
                        fontSize='md'
                        mt={0}
                        pos={'absolute'}
                        top={2}
                        left={2}
                        px={1.5}
                        rounded='lg'
                    >
                        {new Date(movie.release_date).getFullYear()}
                    </Text>
                    <Stack
                        direction={'row'}
                        align={'center'}
                        pos={'absolute'}
                        top={2}
                        right={2}
                        px={1.5}
                        bgColor={'rgba(0, 0, 0, .5)'}
                        rounded={'lg'}
                    >
                        <StarIcon color='gold' />
                        <Text color={'#fff'}>
                            {Number(movie.vote_average).toFixed(1)}
                        </Text>
                    </Stack>
                </Box>
            </a>
        </Link>
    );
};

export default MovieItem;
