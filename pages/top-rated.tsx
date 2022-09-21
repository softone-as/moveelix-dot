import { NextPage } from 'next';
import TopRateMovies from '../src/components/Movies/Section/TopRate';
import HeadNext from '../src/components/shared/HeadNext';
import Layout from '../src/layout';

const TopRated: NextPage = () => {
    return (
        <Layout>
            <HeadNext title='Top Rated | Moveelix' />
            <TopRateMovies allMovies />
        </Layout>
    );
};

export default TopRated;
