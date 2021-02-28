import React from 'react';
import { wrapper } from '../store/store';
import DefaultLayout from "../components/layouts/DefaultLayout";
import '~/scss/style.scss';
import 'antd/dist/antd.min.css';

function App({ Component, pageProps }) {
    const getLayout =
        Component.getLayout || ((page) =>
            <DefaultLayout children={page} />
            );
    return getLayout(<Component {...pageProps} />);
}

export default wrapper.withRedux(App);
