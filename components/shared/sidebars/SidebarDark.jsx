import React from 'react';
import Logo from '~/components/elements/Logo';
import MenuAccordion from '~/components/shared/menu/MenuAccordion';
import { primaryMenu } from '~/public/data/menu.json';
import SocialLinksFeather from '~/components/basic/SocialLinksFeather';

const SidebarDark = () => {
    return (
        <aside className="ps-sidebar--dark">
            <div className="ps-sidebar__header">
                <Logo color="white"/>
                <p>Toque de Letra</p>
            </div>
            <div className="ps-sidebar__content">
                <div className="ps-sidebar__menu">
                    <MenuAccordion data={primaryMenu} classes="menu menu--accordion menu--accordion-white"/>
                </div>
                <div className="ps-sidebar__bottom">
                    <SocialLinksFeather/>
                    <p>&copy; 2021. Enciclopédia do Desporto em Português</p>
                </div>
            </div>
        </aside>
    );
};

export default SidebarDark;
