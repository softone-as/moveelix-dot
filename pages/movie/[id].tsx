import { Box } from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import MovieDetail from '../../src/components/Movies/MovieDetail';
import RecommendMovies from '../../src/components/Movies/Section/Recommend';
import HeadNext from '../../src/components/shared/HeadNext';
import Layout from '../../src/layout';
import { movieService } from '../../src/services/movie';

interface MovieDetailProps {
    movieDetail: any;
    recommendMovie: any;
}

const MovieDetailPage: NextPage<MovieDetailProps> = ({
    movieDetail,
    recommendMovie,
}) => {
    return (
        <Layout>
            <HeadNext title={`Detail | ${movieDetail.title}`} />
            <MovieDetail
                title={movieDetail.title}
                overview={movieDetail.overview}
                tagline={movieDetail.tagline}
                genres={movieDetail.genres}
                releaseDate={movieDetail.release_date}
                posterPath={movieDetail.poster_path}
                runtime={movieDetail.runtime}
                voteAverage={movieDetail.vote_average}
            />
            <Box px={4}>
                <RecommendMovies recommendMovie={recommendMovie?.results} />
            </Box>
        </Layout>
    );
};

export default MovieDetailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    const { getMovieDetail, getSimilarMovie } = movieService;

    const _movieDetail: any = await getMovieDetail(id);
    const _similarMovie: any[] = await getSimilarMovie(id);

    const props: MovieDetailProps = {
        movieDetail: { ..._movieDetail },
        recommendMovie: { ..._similarMovie },
    };

    return {
        props,
    };
};
