import React from 'react';
import Subscribe from '~/components/partials/common/Subscribe';
import HomePostsWithSidebar from '~/components/partials/homepage/default/HomePostsWithSidebar';
import DefaultPostsOnTop from '~/components/partials/homepage/default/DefaultPostsOnTop';
import ExploreTopics from '~/components/partials/common/ExploreTopics';
import LayoutHomeDefault from '~/components/layouts/LayoutHomeDefault';

const Index = () => {
    return (
        <LayoutHomeDefault title="Creative React Blog">
            <main id="homepage-primary">
                <DefaultPostsOnTop collectionSlug="posts-on-top-banner"/>
                <div className="container">
                    <ExploreTopics/>
                    <Subscribe/>
                    <HomePostsWithSidebar/>
                </div>
            </main>
        </LayoutHomeDefault>
    );
};

export default Index;
