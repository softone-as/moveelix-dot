import { NextPage } from 'next';
import NowPlayingMovies from '../src/components/Movies/Section/NowPlaying';
import HeadNext from '../src/components/shared/HeadNext';
import Layout from '../src/layout';

const NowPlaying: NextPage = () => {
    return (
        <Layout>
            <HeadNext title='Now Playing | Moveelix' />
            <NowPlayingMovies allMovies />
        </Layout>
    );
};

export default NowPlaying;
