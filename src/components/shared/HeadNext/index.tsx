import Head from 'next/head';

const HeadNext = ({ title }: { title: string }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content='Built using Next JS' />
            <link rel='icon' href='/favicon.ico' />
        </Head>
    );
};

export default HeadNext;
