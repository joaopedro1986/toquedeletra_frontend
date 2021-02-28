import React from 'react';
import Subscribe from '~/components/partials/common/Subscribe';
import GridPostsOnTop from '~/components/partials/homepage/grid/GridPostsOnTop';
import BlogPostGrids from '~/components/partials/blog/blog-posts/BlogPostGrids';
import LayoutHome from '~/components/layouts/LayoutDefault';

const HomeGrid = () => {
    return (
        <LayoutHome title="Homepage Grid">
            <main id="homepage-grid">
                <GridPostsOnTop collectionSlug="posts-on-top-banner" />
                <div className="container">
                    <Subscribe />
                    <section className="ps-section--home-grid">
                        <BlogPostGrids  column="3" />
                    </section>
                </div>
            </main>
        </LayoutHome>
    );
};

export default HomeGrid;
