import React from 'react';
import { FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon } from 'react-share';

const ModuleArticleSocialSharing = ({ quote }) => (
    <p className="ps-post__sharing">
        <span className="pr-3">Share this:</span>
        <FacebookShareButton url={'https://toquedeletra-frontend.vercel.app/post/' + quote}>
            <FacebookIcon
                size={'2rem'} // You can use rem value instead of numbers
                round
            />
        </FacebookShareButton>
        <WhatsappShareButton url={'https://toquedeletra-frontend.vercel.app/post/' + quote} separator=":: ">
            <WhatsappIcon size={'2rem'} round />
        </WhatsappShareButton>
        <a href="#">
            <i className="fa fa-twitter"></i>
        </a>
        <a href="#">
            <i className="fa fa-google-plus"></i>
        </a>
        <a href="#">
            <i className="fa fa-linkedin"></i>
        </a>
    </p>
);

export default ModuleArticleSocialSharing;
