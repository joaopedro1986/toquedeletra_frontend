import React from 'react';
import LayoutDefault from '~/components/layouts/LayoutDefault';
import Link from 'next/link';
import BreadCrumb from '~/components/elements/BreadCrumb';

const AboutUs2Page = () => {
    const breadcrumb = [
        {
            id: 1,
            text: 'Homepage',
            url: '/',
        },
        {
            id: 2,
            text: 'Sobre Nós',
            url: '/',
        },
    ];

    return (
        <LayoutDefault title="About us 2">
            <main className="ps-page">
                <BreadCrumb data={breadcrumb} />
                <div className="ps-page__content">
                    <div className="container">
                        <div className="ps-block--about-2">
                            <div className="ps-block__thumbnail">
                                <img src="/static/img/edp.jpg" alt="" />
                            </div>
                            <div className="ps-block__content">
                                <h3>Toque de Letra</h3>
                                <p>
                                    <strong>História e Desporto</strong>
                                </p>
                                <p>
                                    Esta revista tem como principal objectivo recuperar as histórias do desporto e
                                    disponibilizar os seus conteudos sempre na língua portuguesa
                                </p>
                                <p>
                                    {' '}
                                    É dado por nós especial destaque ao futebol mas nunca nos esquecemos das outras
                                    modalidades desde individuais, colectivas ou motorizadas{' '}
                                </p>
                            </div>
                            <div className="ps-block__name">
                                <p>Os meus cumprimentos,</p>
                                <h4>João Pedro</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutDefault>
    );
};

export default AboutUs2Page;
