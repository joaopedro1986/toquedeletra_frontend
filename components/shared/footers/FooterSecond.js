import React from 'react';
import SocialLinks from '~/components/elements/SocialLinks';
import WidgetFooterCategories from '~/components/elements/widgets/WidgetFooterCategories';
import WidgetFooterAboutSite from '~/components/elements/widgets/WidgetFooterAboutSite';
import WidgetFooterAddress from '~/components/elements/widgets/WidgetFooterAddress';
import WidgetFooterQuickLink from '~/components/elements/widgets/WidgetFooterQuickLink';

const FooterSecond = ({ classes }) => {
    return (
        <footer className={`ps-footer ps-footer--second ${classes && classes}`}>
            <div className="ps-footer__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ps-footer__copyright">
                                <p>
                                <p>&copy;2021 Enciclopédia do do Desporto em Português.</p>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ps-footer__social">
                                <SocialLinks />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSecond;
