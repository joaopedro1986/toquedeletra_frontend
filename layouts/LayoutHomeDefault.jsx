import React from 'react';
import Head from 'next/head';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import InstagramImages from '~/components/partials/common/InstagramImages';
import FooterSecond from '~/components/shared/footers/FooterSecond';

const LayoutHomeDefault = ({ children, title }) => {
    let titleView;
    if (title !== null) {
        titleView =  title;
    } else {
        titleView = process.env.titleDescription;
    }

    return (
        <div className="pantera">
            <Head>
                <title>{titleView}</title>
            </Head>
            <HeaderDefault className="fixed transparent" />
            {children}
            <InstagramImages />
            <FooterSecond classes="dark" />
        </div>
    );
};

export default LayoutHomeDefault;
