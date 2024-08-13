import "./AboutMe.css"
import { Row, Col } from "react-bootstrap"
import CV from "./../../assets/CVPatriciaLago.pdf"
import photo from "./../../assets/PhotoProyecto.jpeg"

import { useTranslation } from 'react-i18next'


const AboutMe = () => {

    const { t } = useTranslation()

    return (

        <section className="sectionAboutMe">
            <h2 id="aboutme" className="profileTitle">{t('profileTitle')}</h2>
            <Row className="profileRows">

                <Col md={6} className="profileCol">
                    <img src={photo} alt="profile photo" className="profilePhoto" />
                </Col>

                <Col md={6} className="profileCol">
                    <article className="aboutMe">
                        <p className="profileDescription">
                            <span className="profileMyName">{t('profileMyName')}</span>
                            {t('profileDescription1')}
                        </p>
                        <a className="buttonProfile" href={CV} target="_blank" rel="noopener noreferrer">
                            <button className="buttonProfileText">
                                {t('downloadCV')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" alt="download icon" className="buttonIcon">
                                    <path d="M18 23.8333L10.7083 16.5416L12.75 14.4271L16.5417 18.2187V6.33331H19.4583V18.2187L23.25 14.4271L25.2917 16.5416L18 23.8333ZM9.25001 29.6666C8.44793 29.6666 7.76154 29.3813 7.19084 28.8106C6.62015 28.2399 6.33432 27.553 6.33334 26.75V22.375H9.25001V26.75H26.75V22.375H29.6667V26.75C29.6667 27.5521 29.3813 28.2389 28.8106 28.8106C28.2399 29.3823 27.5531 29.6676 26.75 29.6666H9.25001Z" fill="white" />
                                </svg>
                            </button>
                        </a>
                    </article>
                </Col>



            </Row >

        </section>

    )
}
export default AboutMe