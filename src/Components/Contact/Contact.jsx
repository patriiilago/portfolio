import "./Contact.css"
import { useTranslation } from 'react-i18next'


function Contact() {

    const { t } = useTranslation()

    return (
        <div className="contactMe">
            <h1 id="contact" className="contactTitle">{t('contactTitle')}</h1>
            <section className="contactBox">
                <form action="https://formspree.io/f/mjkbkqbq" method="post">
                    <div className="formGroup">
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
                    <div className="formGroup">
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
                    <div className="formGroup">
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
                    <input
                        className="buttonContact"
                        type="submit"
                        value={t('submitButton')}
                    />
                </form>
            </section>
        </div>
    );
}

export default Contact;