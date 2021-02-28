import React from 'react';
import Subscribe from '~/components/partials/common/Subscribe';
import BlogSidebar from '~/components/partials/blog/BlogSidebar';
import BlogHero from '~/components/partials/blog/BlogHero';
import LayoutDefault from '~/components/layouts/LayoutDefault';

const BlogDefaultPage = () => {
    return (
        <LayoutDefault title="Our Blog">
            <main className="ps-page ps-page--blog">
                <BlogHero/>
                <div className="container">
                    <BlogSidebar layout="right"/>
                    <Subscribe/>
                </div>
            </main>
        </LayoutDefault>
    );
};

export default BlogDefaultPage;
