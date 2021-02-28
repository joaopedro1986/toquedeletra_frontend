import React from 'react';
const BlogHero = ({ title }) => {
    let componentTitle;
    if (title) {
        componentTitle = title;
    } else {
        componentTitle = 'Life Style';
    }
    return (
        <div className="ps-page__header bg--cover" style={{ backgroundImage: `url(/static/img/hero/blog-grid.jpg)` }}>
            <div className="container">
                <h3 className="text-uppercase">{componentTitle}</h3>
            </div>
        </div>
    );
};

export default BlogHero;
