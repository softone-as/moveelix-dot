import { NextPage } from 'next';
import PopularMovies from '../src/components/Movies/Section/Popular';
import HeadNext from '../src/components/shared/HeadNext';
import Layout from '../src/layout';

const Popular: NextPage = () => {
    return (
        <Layout>
            <HeadNext title='Popular | Moveelix' />
            <PopularMovies allMovies />
        </Layout>
    );
};

export default Popular;
