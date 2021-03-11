import React from 'react';

const ModuleContactInfo = () => (
    <div className="ps-contact__info">
        <div>
            <div className="ps-section__header">
                <h3>Contactos</h3>
               
            </div>
            <div className="ps-contact__info-content">
                <figure>
                    <figcaption>Email</figcaption>
                    <p><a href="#">enciclpediadodesportopt@gmail.com</a></p>
                </figure>
                <figure className="phone">
                    <figcaption>Telefone</figcaption>
                    <p><strong>932091654</strong></p>

                </figure>
            </div>
        </div>
    </div>
);

export default ModuleContactInfo;