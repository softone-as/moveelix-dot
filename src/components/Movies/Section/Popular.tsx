import { useQuery } from '@tanstack/react-query';
import GridTemplate from '../../../layout/GridTemplate';
import { movieService } from '../../../services/movie';
import CardSkeleton from '../../shared/Loading/Loading';
import MovieSectionWrapper from '../MoviesWrapper';

const PopularMovies = ({ allMovies = false }: { allMovies?: boolean }) => {
    const { getPopularMovie } = movieService;
    const { isLoading, error, data } = useQuery(['popular'], () =>
        getPopularMovie()
    );

    if (isLoading) return <CardSkeleton />;

    return (
        <>
            <MovieSectionWrapper title='Popular'>
                <GridTemplate
                    data={data?.results}
                    path='popular'
                    showAll={allMovies}
                />
            </MovieSectionWrapper>
        </>
    );
};

export default PopularMovies;
