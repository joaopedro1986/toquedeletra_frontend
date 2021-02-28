import React from 'react';
import Head from 'next/head';
import FooterSecond from '~/components/shared/footers/FooterSecond';
import InstagramImages from '~/components/partials/common/InstagramImages';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
const HomeLayout = ({ children, title = 'Homepage' }) => {
    return (
        <div className="__site-layout">
            <Head>
                <title>Pantera - {title}</title>
            </Head>
            <HeaderDefault className="fixed transparent" />
            <main id="homepage-primary">{children}</main>
            <InstagramImages />
            <FooterSecond classes="dark" />
        </div>
    );
};
export default HomeLayout;
