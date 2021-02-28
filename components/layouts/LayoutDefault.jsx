import React from 'react';
import Head from 'next/head';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import InstagramImages from '~/components/partials/common/InstagramImages';
import FooterSecond from '~/components/shared/footers/FooterSecond';
import FooterSimple from '~/components/shared/footers/FooterSimple';

const LayoutDefault = ({ children, title }) => {
    let titleView;
    if (title !== null) {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <div className="pantera">
            <Head>
                <title>{titleView}</title>
            </Head>
            <HeaderDefault />
            {children}
            <InstagramImages />
            <FooterSimple />
            {/*<FooterSecond classes="dark" />*/}
        </div>
    );
};

export default LayoutDefault;
