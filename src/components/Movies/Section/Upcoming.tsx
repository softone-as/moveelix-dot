import { useQuery } from '@tanstack/react-query';
import GridTemplate from '../../../layout/GridTemplate';
import { movieService } from '../../../services/movie';
import Loading from '../../shared/Loading/Loading';
import MovieSectionWrapper from '../MoviesWrapper';

const UpcomingMovies = ({ allMovies = false }: { allMovies?: boolean }) => {
    const { getUpcomingMovie } = movieService;
    const { isLoading, error, data } = useQuery(['upcoming'], () =>
        getUpcomingMovie()
    );

    if (isLoading) return <Loading />;

    return (
        <>
            <MovieSectionWrapper title='Upcoming'>
                <GridTemplate
                    data={data?.results}
                    path='upcoming'
                    showAll={allMovies}
                />
            </MovieSectionWrapper>
        </>
    );
};

export default UpcomingMovies;
