import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Stack,
    Grid,
    GridItem,
    useBreakpointValue,
    Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import MovieItem from '../components/Movies/MovieItem';

interface GridTemplateProps {
    data: any[];
    path: string;
    showAll?: boolean;
}

const GridTemplate: React.FC<GridTemplateProps> = ({ data, path, showAll }) => {
    const maxData = useBreakpointValue({ base: 2, md: 5 });

    return (
        <Grid
            templateColumns={{
                base: 'repeat(3, 1fr)',
                md: 'repeat(4, 1fr)',
                lg: 'repeat(6, 2fr)',
            }}
            gap={{ base: 3, md: 4, lg: 5 }}
        >
            {showAll
                ? data.map((movie) => (
                      <GridItem key={movie.id}>
                          <MovieItem movie={movie} />
                      </GridItem>
                  ))
                : data.slice(0, maxData).map((movie) => (
                      <GridItem key={movie.id}>
                          <MovieItem movie={movie} />
                      </GridItem>
                  ))}

            {!showAll && (
                <GridItem>
                    <Link href={`/${path}`}>
                        <a>
                            <Stack
                                direction={'column'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                rounded={'lg'}
                                height={'200'}
                                width={'150px'}
                                border='1px'
                                color={'#7e27c8'}
                                borderColor='#fd0181'
                                _hover={{
                                    borderColor: '#7e27c8',
                                    color: '#fd0181',
                                }}
                                bgColor='transparent'
                            >
                                <ChevronRightIcon w={8} h={8} />
                                <Text fontWeight={600}>More</Text>
                            </Stack>
                        </a>
                    </Link>
                </GridItem>
            )}
        </Grid>
    );
};

export default GridTemplate;
