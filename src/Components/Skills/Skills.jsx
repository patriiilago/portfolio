import "./Skills.css";
import react from "./../../assets/react.png";
import nodejs from "./../../assets/nodejs.png";
import mongodb from "./../../assets/mongodb.png";
import github from "./../../assets/github.png";
import javascript from "./../../assets/javascript.png";
import express from "./../../assets/express.png";
import html from "./../../assets/html.png";
import css from "./../../assets/css.png";
import bootstrap from "./../../assets/bootstrap.png";
import java from "./../../assets/java.png";

import { Row, Col } from "react-bootstrap";

const Skills = () => {
    return (
        <div className="skillsContainer">
            <h1 id="skills" className='skillsTitle'>Skills</h1>
            <section className="skillsGrid">
                <Row className='techIcons'>
                    <Col md={3} className="columnIcons">
                        <div className="icon">
                            <img src={react} alt="React" />
                        </div>
                        <div className="icon">
                            <img src={bootstrap} alt="Bootstrap" />
                        </div>
                        <div className="icon">
                            <img src={nodejs} alt="Node.js" />
                        </div>
                        <div className="icon">
                            <img src={mongodb} alt="MongoDB" />
                        </div>
                        <div className="icon">
                            <img src={github} alt="GitHub" />
                        </div>
                    </Col>
                    <Col md={3} className="columnIcons">
                        <div className="icon">
                            <span>React</span>
                        </div>
                        <div className="icon">
                            <span>Bootstrap</span>
                        </div>
                        <div className="icon">
                            <span>NodeJS</span>
                        </div>
                        <div className="icon">
                            <span>Mongodb</span>
                        </div>
                        <div className="icon">
                            <span>Git</span>
                        </div>
                    </Col>
                </Row>
                <Row className='techIcons'>
                    <Col md={3} className='columnIcons'>
                        <div className="icon">
                            <img src={javascript} alt="JavaScript" />
                        </div>
                        <div className="icon">
                            <img src={express} alt="Express" />
                        </div>
                        <div className="icon">
                            <img src={html} alt="HTML" />
                        </div>
                        <div className="icon">
                            <img src={css} alt="CSS" />
                        </div>
                        <div className="icon">
                            <img src={java} alt="Java" />
                        </div>
                    </Col>

                    <Col md={3} className='columnIcons'>
                        <div className="icon">
                            <span>JavaScript</span>
                        </div>
                        <div className="icon">
                            <span>Express</span>
                        </div>
                        <div className="icon">
                            <span>HTML5</span>
                        </div>
                        <div className="icon">
                            <span>CSS3</span>
                        </div>
                        <div className="icon">
                            <span>Java</span>
                        </div>
                    </Col>

                </Row>
            </section>
        </div>
    );
}

export default Skills;
