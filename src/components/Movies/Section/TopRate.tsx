import { useQuery } from '@tanstack/react-query';
import GridTemplate from '../../../layout/GridTemplate';
import { movieService } from '../../../services/movie';
import Loading from '../../shared/Loading/Loading';
import MovieSectionWrapper from '../MoviesWrapper';

const TopRateMovies = () => {
    const { getUpcomingMovie } = movieService;
    const { isLoading, error, data } = useQuery(['topRated'], () =>
        getUpcomingMovie()
    );

    if (isLoading) return <Loading />;

    return (
        <>
            <MovieSectionWrapper title='Top Rate'>
                <GridTemplate data={data?.results} pathMore='/' />
            </MovieSectionWrapper>
        </>
    );
};

export default TopRateMovies;
