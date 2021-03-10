import React from 'react';
const BlogHero = ({ title }) => {
    let componentTitle;
    let urlImage;

    if (title) {
        componentTitle = title;
    } else {
        componentTitle = '';
    }


   if (componentTitle === "futebol" || "futebol-europeu") {
        urlImage = `url(/static/img/hero/futebol.jpg)`
    } 
    if (componentTitle === "tenis") {
        urlImage = `url(/static/img/hero/tenis.jpg)`
    }
    return (
        <div className="ps-page__header bg--cover" 
        style={{  backgroundImage: urlImage }}>
            <div className="container">
                <h3 className="text-uppercase">{componentTitle}</h3>
            </div>
        </div>
    );
};

export default BlogHero;
