import "./AboutMe.css"
import { Row, Col } from "react-bootstrap"
import CV from "./../../assets/CVPatriciaLago.pdf"
import photo from "./../../assets/PhotoProyecto.jpeg"
import descarga from "./../../assets/descarga.png"

const AboutMe = () => {


    return (
        <section className="aboutme">
            <h2 id="aboutme" className="profileTitle">About Me</h2>

            <Row className="profileRows">

                <Col md={6} className="profileCol" >

                    <article className="profile">
                        <p> <spam className="profileMyName">I am Patri Lago, </spam>
                            Full stack developer with excellent communication skills.
                            I love collaborating and working as a team.
                        </p>
                        <p>
                            Apart from programming, I also enjoy sports, especially water sports and cycling.
                        </p>
                        <a className="buttonProfile" href={CV} target="_blank" rel="noopener noreferrer">
                            <button className="buttonProfileText">
                                Download CV
                                < img src={descarga} alt="download icon" className="buttonIcon" />
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