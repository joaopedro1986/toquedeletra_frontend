import React from 'react';

import Head from './modules/Head';
import { BackTop } from 'antd';
import SearchForm from '~/components/shared/common/SearchForm';
import HeaderMobile from '~/components/shared/headers-mobile/HeaderMobile';
import MenuDrawer from '~/components/shared/drawers/MenuDrawer';

const DefaultLayout = ({ children }) => (
    <div id="pantera-blog">
        <Head />
        <HeaderMobile />
        <MenuDrawer />
        {children}
        <SearchForm />
        <BackTop>
            <button className="ps-btn--backtop">
                <i className="feather icon icon-arrow-up"></i>
            </button>
        </BackTop>
    </div>
);

export default DefaultLayout;
