import React from 'react';
const BlogHero = ({ title }) => {
    let componentTitle;
    let urlImage;

    if (title) {
        componentTitle = title;
    } else {
        componentTitle = '';
    }

    switch (componentTitle) {
        case 'futebol':
            urlImage = `url(/static/img/hero/futebol.jpg)`;
            break;
        case 'futebol-europeu':
            urlImage = `url(/static/img/hero/puskas.jpg)`;
            break;
        case 'tenis':
            urlImage = `url(/static/img/hero/tenis.jpg)`;
            break;
        case 'Contacto':
            urlImage = `url(/static/img/hero/sports.jpg)`;
            break;
    }

    return (
        <div className="ps-page__header bg--cover" style={{ backgroundImage: urlImage }}>
            <div className="container">
                <h3 className="text-uppercase">{componentTitle}</h3>
            </div>
        </div>
    );
};

export default BlogHero;
