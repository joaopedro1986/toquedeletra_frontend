import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Router, { useRouter } from 'next/router';

import BreadCrumb from '~/components/elements/BreadCrumb';
import { getPostsByKeyWord } from '~/store/post/action';
import SearchResult from '~/components/partials/search/SearchResult';
import LayoutDefault from '~/components/layouts/LayoutDefault';

const PostDetailPage = ({ query }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    async function getProductOnChangeURL(url) {
        const nextKeyword = url.split('=').pop();
        if (nextKeyword !== '') {
            setLoading(true);
            dispatch(getPostsByKeyWord(nextKeyword));
        }
    }

    useEffect(() => {
        const { keyword } = query;
        if (!keyword) {
            Router.push('/page/page-404');
        } else {
            dispatch(getPostsByKeyWord(keyword));
        }

        router.events.on('routeChangeStart', getProductOnChangeURL);

        return () => {
            router.events.off('routeChangeStart', getProductOnChangeURL);
        };
    }, []);

    const breadCrumb = [
        {
            id: 1,
            text: 'Home',
            url: '/'
        },
        {
            id: 2,
            text: 'Search',
            url: '/'
        }
    ];
    return (
        <LayoutDefault>
            <main className="ps-page ps-page--without-hero">
                <BreadCrumb data={breadCrumb} fullwidth={false}/>
                <section className="ps-search--result">
                    <div className="container">
                        <div className="ps-section__header">
                            <h4>Results for: </h4>
                        </div>
                        <div className="ps-section__content">
                            <SearchResult/>
                        </div>
                    </div>
                </section>
            </main>
        </LayoutDefault>
    );
};

PostDetailPage.getInitialProps = async ({ query }) => {
    return { query: query };
};

export default connect()(PostDetailPage);
