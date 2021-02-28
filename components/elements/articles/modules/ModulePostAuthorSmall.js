import React from 'react';
import Link from 'next/link';

const ModulePostAuthorSmall = ({ author }) => (
    <div className="ps-post__author">
        {/*} <div className="ps-post__author-img">
            <img src="/static/img/user/men.jpg"/>
</div>*/}
        <div className="ps-post__author-name">
            <span>{author}</span>
        </div>
    </div>
);

export default ModulePostAuthorSmall;
