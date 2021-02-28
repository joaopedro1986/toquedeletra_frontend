import React from 'react';
import Head from 'next/head';
import FooterSecond from '~/components/shared/footers/FooterSecond';
import InstagramImages from '~/components/partials/common/InstagramImages';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
const PageLayout = ({ children, title = 'Inner page' }) => {
    return (
        <div className="__site-layout">
            <Head>
                <title>Pantera - {title}</title>
            </Head>
            <HeaderDefault className="fixed transparent" />
            <main className="ps-page">{children}</main>
            <InstagramImages />
            <FooterSecond classes="dark" />
        </div>
    );
};
export default PageLayout;
