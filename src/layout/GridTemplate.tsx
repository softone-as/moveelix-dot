import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import MovieItem from '../components/Movies/MovieItem';

interface GridTemplateProps {
    data: any[];
    pathMore: string;
}

const GridTemplate: React.FC<GridTemplateProps> = ({ data, pathMore }) => {
    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={3}>
            {data.slice(0, 3).map((movie) => (
                <GridItem key={movie.id}>
                    <MovieItem movie={movie} />
                </GridItem>
            ))}
        </Grid>
    );
};

export default GridTemplate;
