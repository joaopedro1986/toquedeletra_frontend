import React from 'react';
import ModuleAboutIntro from '~/components/partials/page/modules/ModuleAboutIntro';
import ModuleAboutServices from '~/components/partials/page/modules/ModuleAboutServices';
import ModuleMySkills from '~/components/partials/page/modules/ModuleMySkills';
import BlogHero from '~/components/partials/blog/BlogHero';
import LayoutDefault from '~/components/layouts/LayoutDefault';

const AboutUsPage = () => {
    return (
        <LayoutDefault title="About us">
            <main className="ps-page">
                <BlogHero title="About Us" />
                <div className="ps-page__content">
                    <div className="container">
                        <div className="ps-about-us">
                            <ModuleAboutIntro />
                            <ModuleAboutServices />
                            <ModuleMySkills />
                        </div>
                    </div>
                </div>
            </main>
        </LayoutDefault>
    );
};

export default AboutUsPage;
