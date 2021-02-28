import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import Subscribe from '~/components/partials/common/Subscribe';
import FooterFullContent from '~/components/shared/footers/FooterFullContent';
import InstagramImages from '~/components/partials/common/InstagramImages';
import { getCollectionItemsBySlugs } from '~/store/collection/action';
import BlogHero from '~/components/partials/blog/BlogHero';
import BlogPostGridItemsInside from '~/components/partials/blog/blog-posts/BlogPostGridItemsInside';
import { getInstagram } from '~/store/media/action';
import { toggleDrawer } from '~/store/app/action';
import ViewAllPosts from '~/components/elements/ViewAllPosts';
import LayoutDefault from '~/components/layouts/LayoutDefault';

const GridLayoutFullWidthPage = () => {
    const breadCrumb = [
        {
            id: 1,
            text: 'Home',
            url: '/',
        },
        {
            id: 2,
            text: 'Blog Left Sidebar',
        },
    ];


    return (
        <LayoutDefault title="Blog grid layout fullwidth">
            <main className="ps-page ps-page--blog">
                <BlogHero />
                <div className="container">
                    <section className="ps-blog ps-blog--full-content">
                        <BlogPostGridItemsInside slug="home-featured-posts" column="3" />
                        <ViewAllPosts />
                    </section>
                </div>
            </main>
        </LayoutDefault>
    );
};

export default connect((state) => state.collection)(GridLayoutFullWidthPage);
