import React from 'react';
import GridPostsOnTop from '~/components/partials/homepage/grid/GridPostsOnTop';
import BlogPostGrids from '~/components/partials/blog/blog-posts/BlogPostGrids';
import HomeSidebar from '~/components/partials/homepage/modules/HomeSidebar';
import LayoutHome from '~/components/layouts/LayoutDefault';

const HomeGridSidebarPage = () => {
    return (
        <LayoutHome title="Homepage grid with sidebar">
            <main id="homepage-grid-with-sidebar">
                <div className="container">
                    <GridPostsOnTop collectionSlug="posts-on-top-banner"/>
                    <section className="ps-blog--sidebar ps-section--home-grid">
                        <div className="ps-section__left">
                            <div className="ps-section__items">
                                <BlogPostGrids/>
                            </div>
                        </div>
                        <div className="ps-section__right">
                            <HomeSidebar/>
                        </div>
                    </section>
                </div>
            </main>
        </LayoutHome>
    );
};

export default HomeGridSidebarPage;
