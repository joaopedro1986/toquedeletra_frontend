import React from 'react';
import Head from 'next/head';
import FooterSimple from '~/components/shared/footers/FooterSimple';
import SidebarDark from '~/components/shared/sidebars/SidebarDark';

const LayoutHomeDefault = ({ children, title }) => {
    let titleView;
    if (title !== null) {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <div id="pantera-react">
            <Head>
                <title>{titleView}</title>
            </Head>
            <div className="ps-page--sidebar">
                <div className="ps-page__sidebar">
                    <SidebarDark/>
                </div>
                <div className="ps-page__wrapper">
                    {children}
                    <FooterSimple/>
                </div>
            </div>
        </div>
    );
};

export default LayoutHomeDefault;
