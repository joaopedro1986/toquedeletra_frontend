import React from 'react';
import Logo from "~/components/elements/Logo";
import SocialLinks from "~/components/elements/SocialLinks";
import WidgetFooterNewLetter from "~/components/elements/widgets/WidgetFooterNewLetter";
import WidgetFooterPopularTags from "~/components/elements/widgets/WidgetFooterPopularTags";
import WidgetGetInTouch from "~/components/elements/widgets/WidgetGetInTouch";

const FooterFullContent = () => {
    return(
        <footer className="ps-footer ps-footer--full-content">
            <div className="ps-footer__copyright">
                <div className="container">
                    <div className="ps-footer__copyright-left">
                        <Logo/>
                        <p>&copy;2020 Diaryforlife. All Rights Reserved.</p>
                    </div>
                    <div className="ps-footer__copyright-right">
                        <SocialLinks/>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default FooterFullContent;