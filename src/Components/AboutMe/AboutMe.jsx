import "./AboutMe.css"
import { Row, Col } from "react-bootstrap"
import CV from "./../../assets/CVPatriciaLago.pdf"
import photo from "./../../assets/PhotoProyecto.jpeg"
import descarga from "./../../assets/descarga.png"

import { useTranslation } from 'react-i18next'


const AboutMe = () => {

    const { t } = useTranslation()

    return (
        <section className="aboutme">
            <h2 id="aboutme" className="profileTitle">{t('profileTitle')}</h2>

            <Row className="profileRows">

                <Col md={6} className="profileCol">
                    <article className="profile">
                        <p>
                            <span className="profileMyName">{t('profileMyName')}</span>
                            {t('profileDescription1')}
                        </p>
                        <p>
                            {t('profileDescription2')}
                        </p>
                        <a className="buttonProfile" href={CV} target="_blank" rel="noopener noreferrer">
                            <button className="buttonProfileText">
                                {t('downloadCV')}
                                <img src={descarga} alt="download icon" className="buttonIcon" />
                            </button>
                        </a>
                    </article>
                </Col>

                <Col md={6} className="profileCol">
                    <img src={photo} alt="profile photo" className="profilePhoto" />
                </Col>

            </Row >

        </section>





    )
}
export default AboutMe