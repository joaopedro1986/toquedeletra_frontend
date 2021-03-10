import React from 'react';

const WidgetCategories = () => {
    return (
        <aside className="ps-widget ps-widget--categories">
            <h4 className="ps-widget__heading"><span>Categorias</span></h4>
            <div className="ps-widget__content">
                <ul className="ps-list">
                    <li><a href="/category/futebol">Futebol Nacional</a></li>
                    <li><a href="#">Basquetebol</a></li>
                    <li><a href="#">Tenis</a></li>
                    <li><a href="#">Formula 1</a></li>
                    <li><a href="#">Ciclismo</a></li>
                </ul>
            </div>
        </aside>
    )
};

export default WidgetCategories;