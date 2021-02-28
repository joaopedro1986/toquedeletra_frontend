import React from 'react';
import Head from 'next/head';
import FooterSecond from '~/components/shared/footers/FooterSecond';
import InstagramImages from '~/components/partials/common/InstagramImages';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
const HomeMinimalistLayout = ({ children, title = 'Home Minimalist' }) => {
    return (
        <div className="__site-layout">
            <Head>
                <title>Pantera - {title}</title>
            </Head>
            <HeaderDefault />
            <main id="homepage-timeline">{children}</main>
            <InstagramImages />
            <FooterSecond classes="dark" />
        </div>
    );
};
export default HomeMinimalistLayout;
