import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getCollectionItemsBySlugs } from '~/store/collection/action';
import HomeMinimalistPostItems from '~/components/partials/homepage/minimalist/HomeMinimalistPostItems';
import { toggleDrawer } from '~/store/app/action';
import LayoutHome from '~/components/layouts/LayoutDefault';


const HomeMinimalistPage = () => {

    return (
        <LayoutHome title="Home Minimalist">
            <main id="homepage-timeline">
                <div className="container">
                    <section className="ps-page--minimalist">
                        <div className="ps-page__header">
                            <p>My Blog</p>
                            <h3>
                                Check my life <span>Inside Story.</span>
                            </h3>
                        </div>
                        <div className="ps-page__content">
                            <HomeMinimalistPostItems collectionSlug="home-featured-posts" />
                        </div>
                    </section>
                </div>
            </main>
        </LayoutHome>
    );
};

export default HomeMinimalistPage;
