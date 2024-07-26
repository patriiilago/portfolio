import bricksBreaker from "./../../assets/BricksBreaker.png"
import miauyuda from "./../../assets/MiauYuda.png"
import ripcamp from "./../../assets/RipCamp.png"
import "./ProjectsDetails.css"

import { CardText, Col } from "react-bootstrap"
import Card from 'react-bootstrap/Card';


const ProjectsDetails = () => {
    const ProjectCard = [
        {
            imagen: miauyuda,
            link: "https://miauyuda.netlify.app/",
            project: "Miauyuda",
            description: "Miauyuda is a responsive application designed for people who have pets and need to consult a vet. With this application you can choose which professional best suits your pet's needs and have online consultations at any time of the day.",
            tech: "React Bootstrap NodeJS Express MongoDB "
        },

        {
            imagen: bricksBreaker,
            link: "https://github.com/Blasdelezo1/brick-breaker-MVP",
            project: "Bricks Breaker",
            description: "The game consists of a paddle that the player controls to bounce a ball and break bricks arranged at the top of the screen.",
            tech: "HTML CSS JavaScript"
        },
        {
            imagen: ripcamp,
            link: "https://ripcamp.netlify.app/",
            project: "Ripcamp",
            description: "RipCamp is a SPA that connects current students of the Data Analytics and Web Development bootcamps to help them solve technical questions and problems. Development and deployment of a custom API with json server.",
            tech: "HTML CSS JavaScript React Bootstrap"
        }
    ];

    return (
        <section >
            <h1 id="projects" className="projectsTitle">Projects</h1>
            <article className="projects" >
                {ProjectCard.map((card, index) =>
                    <Card key={index} className="projectCard">
                        <a href={card.link}>
                            <Card.Img className="projectImg" src={card.imagen} alt={card.project} />
                            <Card.Body className="projectText">
                                <Card.Title className="projectTitle">{card.project}</Card.Title>
                                <Card.Text className="projectDescription">
                                    {card.description}
                                </Card.Text>
                                <CardText className="projectTech">
                                    {card.tech}
                                </CardText>
                            </Card.Body>
                        </a>
                    </Card>
                )}
            </article>
        </section>
    )
    //TODO: arreglar descripcion miauyuda
}
export default ProjectsDetails