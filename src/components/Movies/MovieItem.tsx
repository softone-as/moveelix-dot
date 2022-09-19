import { StarIcon } from '@chakra-ui/icons';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
// import Image from 'next/image';

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
                        opacity: '0.3',
                    }}
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
                    <Stack
                        pos='relative'
                        mt={-20}
                        align={'center'}
                        textAlign={'center'}
                    >
                        <Heading
                            fontSize={'l'}
                            fontFamily={'body'}
                            fontWeight={500}
                            color='#fff'
                        >
                            {movie.title}
                        </Heading>
                        <Text color={'#C1C1C1'} fontSize='xs' mt={0}>
                            {new Date(movie.release_date).getFullYear()} |{' '}
                            {/* {movie.genres[0].name} */}
                        </Text>
                        <Stack direction={'row'} align={'center'}>
                            <StarIcon color='gold' />
                            <Text color={'#fff'}>
                                {Number(movie.vote_average).toFixed(1)}
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </a>
        </Link>
    );
};

export default MovieItem;
