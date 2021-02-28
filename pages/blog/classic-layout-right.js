import React, { useEffect } from 'react';

import { getCollectionItemsBySlugs } from '~/store/collection/action';
import BlogHero from '~/components/partials/blog/BlogHero';
import ModulePostClassicItems from '~/components/partials/blog/modules/ModulePostClassicItems';
import HomeSidebar from '~/components/partials/homepage/modules/HomeSidebar';
import { toggleDrawer } from '~/store/app/action';
import { getInstagram } from '~/store/media/action';
import ViewAllPosts from '~/components/elements/ViewAllPosts';
import LayoutDefault from '~/components/layouts/LayoutDefault';

const ClassicLayoutRight = () => {

    return (
        <LayoutDefault title="Blog classic layout left">
            <main className="ps-page ps-page--blog">
                <BlogHero title="Classic layout right"/>
                <div className="container">
                    <section className="ps-blog--sidebar ps-blog--classic">
                        <div className="ps-section__left">
                            <div className="ps-section__items">
                                <ModulePostClassicItems/>
                                <ViewAllPosts/>
                            </div>
                        </div>
                        <div className="ps-section__right">
                            <HomeSidebar/>
                        </div>
                    </section>
                </div>
            </main>
        </LayoutDefault>
    );
};

export default ClassicLayoutRight;
