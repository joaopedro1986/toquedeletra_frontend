import React from 'react';
import FooterSimple from '~/components/shared/footers/FooterSimple';
import FooterSecond from '~/components/shared/footers/FooterSecond';

const ComponentFootersPage = () => {
    return (
        <main>
            <FooterSimple />

            <FooterSecond classes="dark" />
        </main>
    );
};

export default ComponentFootersPage;
