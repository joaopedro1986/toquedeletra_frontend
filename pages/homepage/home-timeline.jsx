import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getCollectionItemsBySlugs } from '~/store/collection/action';
import HomeTimelinePostItems from '~/components/partials/homepage/timeline/HomeTimelinePostItems';
import { getInstagram } from '~/store/media/action';
import { toggleDrawer } from '~/store/app/action';
import LayoutHome from '~/components/layouts/LayoutHome';

const HomeTimeLinePage = () => {
    const dispatch = useDispatch();
    const collectionSlugs = ['home-featured-posts'];
    useEffect(() => {
        dispatch(getCollectionItemsBySlugs(collectionSlugs));
        dispatch(getInstagram(1));
        dispatch(toggleDrawer(false));
    }, [dispatch]);

    return (
        <LayoutHome title="Homepage Timeline">
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
                            <HomeTimelinePostItems slug="home-featured-posts" />
                        </div>
                    </section>
                </div>
            </main>
        </LayoutHome>
    );
};

export default connect((state) => state.collection)(HomeTimeLinePage);
