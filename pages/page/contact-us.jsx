import React, { useEffect } from 'react';
import ModuleContactInfo from '~/components/partials/page/modules/ModuleContactInfo';
import ModuleContactForm from '~/components/partials/page/modules/ModuleContactForm';
import BlogHero from '~/components/partials/blog/BlogHero';
import { useDispatch } from 'react-redux';
import { getInstagram } from '~/store/media/action';
import { toggleDrawer } from '~/store/app/action';
import LayoutDefault from '~/components/layouts/LayoutDefault';

const ContactUsPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getInstagram(1));
        dispatch(toggleDrawer(false));
    }, [dispatch]);

    return (
        <LayoutDefault title="Contact Us">
            <main className="ps-page">
                <BlogHero title="Contacto" />
                <div className="ps-page__content">
                    <section className="ps-contact">
                        <div className="container">
                            <ModuleContactInfo />
                            <ModuleContactForm />
                        </div>
                    </section>
                </div>
            </main>
        </LayoutDefault>
    );
};

export default ContactUsPage;
