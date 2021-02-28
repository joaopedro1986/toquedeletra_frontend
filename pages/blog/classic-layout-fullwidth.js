import React from 'react';

import BlogHero from '~/components/partials/blog/BlogHero';
import ModulePostClassicItems from '~/components/partials/blog/modules/ModulePostClassicItems';
import ViewAllPosts from '~/components/elements/ViewAllPosts';
import LayoutDefault from '~/components/layouts/LayoutDefault';

const ClassicLayoutFullWidth = () => {
    return (
        <LayoutDefault title="Blog classic layout fullwidth">
            <main className="ps-page ps-page--blog">
                <BlogHero title="Classic layout fullwidth"/>
                <div className="container">
                    <div className="ps-blog ps-blog--classic">
                        <ModulePostClassicItems/>
                        <ViewAllPosts/>
                    </div>
                </div>
            </main>
        </LayoutDefault>
    );
};

export default ClassicLayoutFullWidth;
