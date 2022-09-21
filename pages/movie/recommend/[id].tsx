import { GetServerSideProps, NextPage } from 'next';
import RecommendMovies from '../../../src/components/Movies/Section/Recommend';
import HeadNext from '../../../src/components/shared/HeadNext';
import Layout from '../../../src/layout';
import { movieService } from '../../../src/services/movie';

const Recommend: NextPage<any> = ({
    recommendMovie,
}: {
    recommendMovie: any;
}) => {
    return (
        <Layout>
            <HeadNext title='Recommend | Moveelix' />
            <RecommendMovies
                recommendMovie={recommendMovie?.results}
                allMovies
            />
        </Layout>
    );
};

export default Recommend;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    const { getSimilarMovie } = movieService;

    const _similarMovie: any[] = await getSimilarMovie(id);

    const props = {
        recommendMovie: { ..._similarMovie },
    };

    return {
        props,
    };
};
