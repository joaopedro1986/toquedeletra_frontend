import React from 'react';
import HeaderCenter from '~/components/shared/headers/HeaderCenter';
import FooterSimple from '~/components/shared/footers/FooterSimple';
import DefaultPostsOnTop from '~/components/partials/homepage/default/DefaultPostsOnTop';
import ExploreTopics from '~/components/partials/common/ExploreTopics';
import PostGroupLatest from '~/components/partials/post-groups/PostGroupLatest';
import Subscribe from '~/components/partials/common/Subscribe';
import HomePostsWithSidebar from '~/components/partials/homepage/default/HomePostsWithSidebar';

const HeaderCenterPage = () => {
    return (
        <main className="ps-page">
            <HeaderCenter />
            <DefaultPostsOnTop collectionSlug="posts-on-top-banner" />
            <div className="container">
                <ExploreTopics />
                <PostGroupLatest />
                <Subscribe />
                <HomePostsWithSidebar />
            </div>
            <FooterSimple />
        </main>
    );
};

export default HeaderCenterPage;
