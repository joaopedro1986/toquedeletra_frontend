import React from 'react';
import BlogSidebar from '~/components/partials/blog/BlogSidebar';
import BlogHero from '~/components/partials/blog/BlogHero';
import LayoutDefault from '~/components/layouts/LayoutDefault';

const GridLayoutLeft = () => {
    return (
        <LayoutDefault title="Blog grid layout left">
            <main className="ps-page ps-page--blog">
                <BlogHero/>
                <div className="container">
                    <BlogSidebar layout="left"/>
                </div>
            </main>
        </LayoutDefault>
    );
};

export default GridLayoutLeft;
