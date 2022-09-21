import { NextPage } from 'next';
import UpcomingMovies from '../src/components/Movies/Section/Upcoming';
import HeadNext from '../src/components/shared/HeadNext';
import Layout from '../src/layout';

const Upcoming: NextPage = () => {
    return (
        <Layout>
            <HeadNext title='Upcoming | Moveelix' />
            <UpcomingMovies allMovies />
        </Layout>
    );
};

export default Upcoming;
