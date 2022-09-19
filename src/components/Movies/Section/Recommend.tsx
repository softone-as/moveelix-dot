import React from 'react';
import GridTemplate from '../../../layout/GridTemplate';
import MovieSectionWrapper from '../MoviesWrapper';

const RecommendMovies: React.FC<any> = ({ recommendMovie }) => {
    return (
        <>
            <MovieSectionWrapper title='Recommended'>
                <GridTemplate data={recommendMovie} pathMore='/' />
            </MovieSectionWrapper>
        </>
    );
};

export default RecommendMovies;
