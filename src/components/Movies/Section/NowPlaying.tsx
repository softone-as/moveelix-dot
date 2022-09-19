import { useQuery } from '@tanstack/react-query';
import GridTemplate from '../../../layout/GridTemplate';
import { movieService } from '../../../services/movie';
import Loading from '../../shared/Loading/Loading';
import MovieSectionWrapper from '../MoviesWrapper';

const NowPlayingMovies = () => {
    const { getUpcomingMovie } = movieService;
    const { isLoading, error, data } = useQuery(['nowPlaying'], () =>
        getUpcomingMovie()
    );

    if (isLoading) return <Loading />;

    return (
        <>
            <MovieSectionWrapper title='Now Playing'>
                <GridTemplate data={data?.results} pathMore='/' />
            </MovieSectionWrapper>
        </>
    );
};

export default NowPlayingMovies;
