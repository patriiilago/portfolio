import "./Profile.css"
import avatar from "./../../assets/woman-technologist.png"
import { useTranslation } from 'react-i18next'
import { Row, Col } from "react-bootstrap";

function Profile() {

    const { t } = useTranslation();

    return (

        <section className="profileSection">

            <Row className="profile" id="avatar">

                <Col className="textJob">

                    <p className="greeting">{t('greeting')}</p>

                    <p className="myName">{t('myName')}</p>

                    <p className="lastName">{t('lastName')}</p>

                    <p className="jobTitle">{t('jobTitle')}</p>

                </Col>

                <Col>
                    <img src={avatar} alt="profile avatar" className="profileAvatar" />
                </Col>


            </Row>

        </section>
    )
}

export default Profile