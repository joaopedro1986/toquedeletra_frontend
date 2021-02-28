import React from 'react';

import BlogSidebar from '~/components/partials/blog/BlogSidebar';
import BlogHero from '~/components/partials/blog/BlogHero';
import LayoutDefault from '~/components/layouts/LayoutDefault';

const GridLayoutRight = () => {
    return (
        <LayoutDefault title="Blog grid layout right">
            <main className="ps-page ps-page--blog">
                <BlogHero />
                <div className="container">
                    <BlogSidebar />
                </div>
            </main>
        </LayoutDefault>
    );
};

export default GridLayoutRight;
