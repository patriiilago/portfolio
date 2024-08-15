import "./Profile.css"
import avatar from "./../../assets/woman-technologist.png"
import { useTranslation } from 'react-i18next'
import { Row, Col } from "react-bootstrap";

function Profile() {

    const { t } = useTranslation();

    return (

        <section className="profileSection">

            <Row className="profileRow" id="avatar">

                <Col className="profileCol">

                    <article className="profile-section__content">

                        <p className="greeting">{t('greeting')}</p>

                        <p className="myName">{t('myName')}</p>

                        <p className="jobTitle">{t('jobTitle')}</p>

                        <a href="#contact" className="contact-profile">

                            <ul>{t('contact-me')}</ul>

                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="27" viewBox="0 0 33 27" fill="none">
                                <path d="M11.7941 0.5L24.9706 13.5L11.7941 26.5V15.3571H0.5V11.6429H11.7941V0.5ZM28.7353 26.5V0.5H32.5V26.5H28.7353Z" fill="#9013FE" />
                            </svg>

                        </a>

                    </article>

                </Col>

                <Col className="profileCol">
                    <img src={avatar} alt="profile avatar" className="profileAvatar" />
                </Col>


            </Row>

        </section>
    )
}

export default Profile