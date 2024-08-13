import "./Contact.css"

import { useTranslation } from 'react-i18next'
import { Row, Col } from "react-bootstrap"


function Contact() {

    const { t } = useTranslation()

    return (
        <section className="contactSection">
            <div className="content-wrapper">
                <Row className="contactRow">
                    <Col className="contactCol">
                        <p className="contact-heading">{t('contact-heading')}</p>
                        <p className="contact-description">{t('contact-description')}
                            <span className="highlighted-text">{t('highlighted-text')}</span></p>
                    </Col>
                    <Col>
                        <form action="https://formspree.io/f/mjkbkqbq" method="post">
                            <div className="formName">
                                <label htmlFor="name" hidden>
                                    {t('namePlaceholder')}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder={t('namePlaceholder')}
                                    required
                                />
                            </div>
                            <div className="formEmail">
                                <label htmlFor="email" hidden>
                                    {t('emailPlaceholder')}
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder={t('emailPlaceholder')}
                                    required
                                />
                            </div>
                            <div className="formMessage">
                                <label htmlFor="message" hidden>
                                    {t('messagePlaceholder')}
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder={t('messagePlaceholder')}
                                    required
                                ></textarea>
                            </div>

                            <button className="buttonContact">
                                {t('submitButton')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M24.3741 3.24354C24.9629 1.61466 23.3846 0.0362132 21.7558 0.626426L1.84911 7.8262C0.214865 8.41778 0.0172292 10.6478 1.52062 11.5188L7.87494 15.1977L13.5491 9.52323C13.8062 9.27494 14.1505 9.13755 14.5079 9.14065C14.8652 9.14376 15.2071 9.28711 15.4598 9.53984C15.7125 9.79256 15.8559 10.1344 15.859 10.4918C15.8621 10.8492 15.7247 11.1935 15.4764 11.4506L9.80223 17.1251L13.4823 23.4798C14.3519 24.9833 16.5818 24.7843 17.1733 23.1513L24.3741 3.24354Z" fill="white" />
                                </svg>
                            </button>

                        </form>
                    </Col>
                </Row>
            </div>
        </section >
    );
}

export default Contact;