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
        <>
            <h1 id="skills" className='skillsTitle'>Skills</h1>
            <div >
                <Row className='techIcons'>
                    <Col md={6} className="columnIcons">
                        <div className="icon">
                            <span>React</span>
                            <img src={react} alt="React" />
                        </div>
                        <div className="icon">
                            <span>Bootstrap</span>
                            <img src={bootstrap} alt="Bootstrap" />
                        </div>
                        <div className="icon">
                            <span>NodeJS</span>
                            <img src={nodejs} alt="Node.js" />
                        </div>
                        <div className="icon">
                            <span>Mongodb</span>
                            <img src={mongodb} alt="MongoDB" />
                        </div>
                        <div className="icon">
                            <span>Git</span>
                            <img src={github} alt="GitHub" />
                        </div>
                    </Col>
                    <Col md={6} className='columnIcons'>
                        <div className="icon">
                            <span>JavaScript</span>
                            <img src={javascript} alt="JavaScript" />
                        </div>
                        <div className="icon">
                            <span>Express</span>
                            <img src={express} alt="Express" />
                        </div>
                        <div className="icon">
                            <span>HTML5</span>
                            <img src={html} alt="HTML" />
                        </div>
                        <div className="icon">
                            <span>CSS3</span>
                            <img src={css} alt="CSS" />
                        </div>
                        <div className="icon">
                            <span>Java</span>
                            <img src={java} alt="Java" />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Skills;
