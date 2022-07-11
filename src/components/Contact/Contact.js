import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = () => (
    <section id="contact">
        <div class="contact">~
            <hr class="m-0" />
            <div class="container">
                <div class="row justify-content-between">
                    <div class="contact-form col-12 col-sm-6 col-md-12">
                        <h2>Contact</h2>
                        <form action="#" method="post" class="needs-validation" novalidate>
                            <div class="form-group mt-5">
                                <label class="col-12">Full Name</label>
                                <input class="col-12" type="text" id="fname" placeholder="Full name" name="fname"
                                    required />
                                <div class="invalid-feedback warning">Please write a full name.</div>
                            </div>
                            <div class="form-group mt-5">
                                <label class="col-12">E-mail</label>
                                <input class="col-12" type="email" id="email" placeholder="E-mail" name="email"
                                    required />
                                <div class="invalid-feedback warning">Please write a correct e-mail.</div>
                            </div>
                            <div class="form-group mt-5">
                                <label class="col-12">Message</label>
                                <input class="col-12" type="text" id="message" placeholder="Message" name="message"
                                    required />
                                <div class="invalid-feedback warning">Please write a message.</div>
                            </div>
                            <div class="form-group row justify-content-end">
                                <div class="col-12 col-lg-5 mb-5 justify-content-start justify-content-sm-end">
                                    <button type="submit" name="submit" class="main-button">Send message</button>
                                </div>
                            </div>
                        </form>
                        <div class="media row my-5">
                            <div class="col-12 col-lg-4">
                                <p>Social media</p>
                                <p class="warning">
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i class="bi bi-facebook"></i>
                                    </a>
                                    <a href="https://twitter.com/" target="_blank">
                                        <i class="bi bi-twitter"></i>
                                    </a>
                                    <a href="https://linkedin.com/" target="_blank">
                                        <i class="bi bi-linkedin"></i>
                                    </a>
                                </p>
                            </div>
                            <div class="col-12 col-lg-4 mt-5 mt-md-0">
                                <p>Contact me via e-mail</p>
                                <a href="mailto:example@example.com" class="warning">example@example.com</a>
                            </div>
                            <div class="col-12 col-lg-4 mt-5 mt-md-0">
                                <p>My phone</p>
                                <a href="tel:+00-000-00-00" class="warning">+00 000 00 00</a>
                            </div>
                        </div>
                        <div class="footer d-none d-md-block">
                            <div class="row justify-content-start align-items-end">
                                <div class="col-3">
                                    <img src="img/icons/firmbee.svg" alt="firmbee" />
                                </div>
                                <div class="col-9">
                                    <span>© 2022-23 Firmbee. Design with by <a
                                            href="https://firmbee.com/solutions/free-invoicing-app-billing-software"
                                            title="Firmbee - Online Remote working app for collaboration & task management"
                                            target="_blank">Firmbee</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
