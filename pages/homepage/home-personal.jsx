import React from 'react';
import HomePersonalTopSlider from '~/components/partials/homepage/personal/HomePersonalTopSlider';
import PostGroupWithPrimary from '~/components/partials/post-groups/PostGroupWithPrimary';
import LayoutHomePersonal from '~/components/layouts/LayoutHomePersonal';

const Homepersonal = () => {
    return (
        <LayoutHomePersonal title="Homepage Timeline">
            <main id="homepage-personal">
                <div className="container">
                    <HomePersonalTopSlider/>
                    <PostGroupWithPrimary/>
                </div>
            </main>
        </LayoutHomePersonal>
    );
};

export default Homepersonal;
