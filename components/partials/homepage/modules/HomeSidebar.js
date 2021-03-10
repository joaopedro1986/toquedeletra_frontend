import React from 'react';
import WidgetCategories from '~/components/elements/widgets/WidgetCategories';
import WidgetFollowMe from '~/components/elements/widgets/WidgetFollowMe';
import WidgetSearch from '~/components/elements/widgets/WidgetSearch';
import WidgetRecentPosts from '~/components/elements/widgets/WidgetRecentPosts';
import WidgetAuthor from '~/components/elements/widgets/WidgetAuthor';

const HomeSidebar = () => {
    return (
        <div className="ps-sidebar ps-sidebar--home">
            {/* <WidgetAuthor />*/}
            <WidgetRecentPosts collectionSlug="home-featured-posts" />
            <WidgetCategories />
            <WidgetFollowMe />
        </div>
    );
};

export default HomeSidebar;
