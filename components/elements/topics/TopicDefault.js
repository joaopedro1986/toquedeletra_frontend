import React from 'react';
import Link from 'next/link';

const TopicDefault = ({ title, img, url }) => {
    return (
        <article className="ps-block--topic">
            <img src={img} />

            <a href={url} className="ps-block__overlay"></a>

            <div className="ps-block__content">
                <a href={url} className="ps-block__title">
                    {title} 
                </a>
            </div>
        </article>
    );
};

export default TopicDefault;
