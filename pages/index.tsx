import { NextPage } from 'next';
import NowPlayingMovies from '../src/components/Movies/Section/NowPlaying';
import PopularMovies from '../src/components/Movies/Section/Popular';
import TopRateMovies from '../src/components/Movies/Section/TopRate';
import UpcomingMovies from '../src/components/Movies/Section/Upcoming';
import HeadNext from '../src/components/shared/HeadNext';
import Layout from '../src/layout';

const Home: NextPage = () => {
    return (
        <Layout>
            <HeadNext title='Moveelix' />
            <NowPlayingMovies />
            <PopularMovies />
            <TopRateMovies />
            <UpcomingMovies />
        </Layout>
    );
};

export default Home;
