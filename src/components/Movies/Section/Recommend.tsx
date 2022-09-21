import { useRouter } from 'next/router';
import React from 'react';
import GridTemplate from '../../../layout/GridTemplate';
import MovieSectionWrapper from '../MoviesWrapper';

const RecommendMovies: React.FC<any> = ({
    recommendMovie,
    allMovies = false,
}: {
    recommendMovie: any;
    allMovies?: boolean;
}) => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <MovieSectionWrapper title='Recommended'>
                <GridTemplate
                    data={recommendMovie}
                    path={`movie/recommend/${id}`}
                    showAll={allMovies}
                />
            </MovieSectionWrapper>
        </>
    );
};

export default RecommendMovies;
