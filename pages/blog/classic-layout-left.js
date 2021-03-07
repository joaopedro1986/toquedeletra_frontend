import React, { useEffect } from 'react';
import BlogHero from '~/components/partials/blog/BlogHero';
import HomeSidebar from '~/components/partials/homepage/modules/HomeSidebar';
import ModulePostClassicItems from '~/components/partials/blog/modules/ModulePostClassicItems';
import ViewAllPosts from '~/components/elements/ViewAllPosts';
import LayoutDefault from '~/components/layouts/LayoutDefault';

const ClassicLayoutLeft = () => {
    return (
        <LayoutDefault title="Blog classic layout left">
            <main className="ps-page ps-page--blog">
                <BlogHero title="Futebol Nacional" />
                <div className="container">
                    <section className="ps-blog--sidebar ps-blog--classic left">
                        <div className="ps-section__left">
                            <div className="ps-section__items">
                                <ModulePostClassicItems />
                                <ViewAllPosts />
                            </div>
                        </div>
                        <div className="ps-section__right">
                            <HomeSidebar />
                        </div>
                    </section>
                </div>
            </main>
        </LayoutDefault>
    );
};

export default ClassicLayoutLeft;
