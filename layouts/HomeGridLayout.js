import React from 'react';
import Head from 'next/head';
import FooterSecond from '~/components/shared/footers/FooterSecond';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
const HomeGridLayout = ({ children, title = 'Homepage Grid Layout' }) => {
    return (
        <div className="__site-layout">
            <Head>
                <title>Pantera - {title}</title>
            </Head>
            <HeaderDefault />
            <main id="homepage-grid">{children}</main>
            <FooterSecond classes="dark" />
        </div>
    );
};
export default HomeGridLayout;
