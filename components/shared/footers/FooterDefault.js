import React from 'react';
import Logo from "~/components/elements/Logo";
import {resolveHref} from "next/dist/next-server/lib/router/router";
import Link from "next/link";
import SocialLinks from "~/components/elements/SocialLinks";

const FooterDefault = () => {
    const footerLinks = [
        {
            id: 1,
            text: "Contact us",
            href: "/contact-us"
        },
        {
            id: 2,
            text: "Terms & Conditions",
            href: "/blank"
        },
        {
            id: 3,
            text: "Privacy",
            href: "/blank"
        },
        {
            id: 4,
            text: "About us",
            href: "/about-us"
        },
    ]

    const footerLinksArea = footerLinks.map(item => (
        <li key={item.id}>
            <Link href={item.href}>
                <a>{item.text}</a>
            </Link>
        </li>
    ))

    return (
        <footer className="ps-footer ps-footer--default">
            <div className="container">
                <div className="ps-footer__content">
                    <Logo color="white"/>
                    <ul className="ps-footer__links">
                        {footerLinksArea}
                    </ul>
                </div>
                <div className="ps-footer__bottom">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ps-footer__copyright">
                                <p>&copy;2021 Enciclopédia do do Desporto em Português.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ps-footer__socials">
                                <SocialLinks/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            3
        </footer>
    )
};

export default FooterDefault;