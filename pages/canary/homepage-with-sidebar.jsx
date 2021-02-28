import React from 'react';
import LayoutSidebar from '~/components/layouts/LayoutSidebar';
import InstagramImages from '~/components/partials/common/InstagramImages';
import DefaultPostsOnTop from '~/components/partials/homepage/default/DefaultPostsOnTop';
import ExploreTopics from '~/components/partials/common/ExploreTopics';
import Subscribe from '~/components/partials/common/Subscribe';
import HomePostsWithSidebar from '~/components/partials/homepage/default/HomePostsWithSidebar';

const HomepageWithSidebar = () => {
    return (
        <LayoutSidebar title="Sidebar ">
            <main id="homepage-primary">
                <DefaultPostsOnTop collectionSlug="posts-on-top-banner"/>
                <div className="container-fluid">
                    <ExploreTopics/>
                    <HomePostsWithSidebar/>
                    <Subscribe/>
                </div>
            </main>
            <InstagramImages/>
        </LayoutSidebar>
    );
};

export default HomepageWithSidebar;
