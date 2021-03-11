import React from 'react';

const ModuleContactForm = () => (
    <div className="ps-contact__form">
        <div className="row">
            <div className="col-md-6">
                <form className="ps-form--contact">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                            <div className="form-group">
                                <label>Nome</label>
                                <input className="form-control" type="text" placeholder=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                            <div className="form-group">
                                <label>E-mail</label>
                                <input className="form-control" type="email" placeholder=""/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Assunto</label>
                        <input className="form-control" type="email" placeholder=""/>
                    </div>
                    <div className="form-group">
                        <label>Mensagem</label>
                        <textarea className="form-control" rows="6" placeholder=""/>
                    </div>
                    <div className="form-group ps-form__submit">
                        <button className="ps-btn ps-btn--black">Enviar</button>
                    </div>
                </form>
            </div>
            <div className="col-md-6">
                <div className="ps-contact-map">
                    <iframe
                        src="https://maps.google.com/maps?q=Rua%20d%20a%20Fonte%20Nova%2016,%20Figueira%20da%20Foz&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        height={500}></iframe>
                </div>
            </div>
        </div>
    </div>

);

export default ModuleContactForm;