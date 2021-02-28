import React from 'react';
import HomeSidebar from '~/components/partials/homepage/modules/HomeSidebar';
import HomePostItemListViews from '~/components/partials/homepage/modules/HomePostItemListViews';
import ViewAllPosts from '~/components/elements/ViewAllPosts';

const HomePostsWithSidebar = () => {
    return (
        <section className="ps-section--classic ps-home-our-story">
            <div className="ps-section__header">
                <h3>Our Story</h3>
            </div>
            <div className="ps-section__content">
                <div className="ps-blog--sidebar">
                    <div className="ps-section__left">
                        <div className="ps-section__items">
                            <HomePostItemListViews collectionSlug="home-grid-items" />
                        </div>
                        <ViewAllPosts />
                    </div>
                    <div className="ps-section__right">
                        <HomeSidebar />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePostsWithSidebar;
