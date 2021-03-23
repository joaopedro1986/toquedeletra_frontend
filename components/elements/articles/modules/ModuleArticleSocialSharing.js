import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
} from 'react-share';

const ModuleArticleSocialSharing = ({ linkSocialMedia }) => {
    let link = 'https://toquedeletra-frontend.vercel.app/post/' + linkSocialMedia;

    return (
        <p className="ps-post__sharing">
            <span className="pr-3">Share this:</span>
            <FacebookShareButton url={link} link={link}>
                <FacebookIcon
                    size={'2rem'} // You can use rem value instead of numbers
                    round
                />
            </FacebookShareButton>
            <WhatsappShareButton url={link} separator=":: ">
                <WhatsappIcon size={'2rem'} round />
            </WhatsappShareButton>
            <TwitterShareButton url={link}>
                <TwitterIcon size={'2rem'} round />
            </TwitterShareButton>
            <LinkedinShareButton url={link} windowWidth={750} windowHeight={600}>
                <LinkedinIcon size={'2rem'} round />
            </LinkedinShareButton>

            <a href={"http://www.facebook.com/share.php?u="+link}
                target="_blank">
            <i className="fa fa-facebook"></i>
        </a>
        </p>
    );
};

export default ModuleArticleSocialSharing;
