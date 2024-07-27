import bricksBreaker from "./../../assets/BricksBreaker.png"
import miauyuda from "./../../assets/MiauYuda.png"
import ripcamp from "./../../assets/RipCamp.png"
import "./ProjectsDetails.css"

import { CardText, Col } from "react-bootstrap"
import Card from 'react-bootstrap/Card'
import { useTranslation } from 'react-i18next'

const ProjectsDetails = () => {

    const { t } = useTranslation()

    const ProjectCard = [
        {
            imagen: miauyuda,
            link: "https://miauyuda.netlify.app/",
            project: t('miauyuda.title'),
            description: t('miauyuda.description'),
            tech: t('miauyuda.tech')
        },

        {
            imagen: bricksBreaker,
            link: "https://github.com/Blasdelezo1/brick-breaker-MVP",
            project: t('bricksBreaker.title'),
            description: t('bricksBreaker.description'),
            tech: t('bricksBreaker.tech')
        },
        {
            imagen: ripcamp,
            link: "https://ripcamp.netlify.app/",
            project: t('ripcamp.title'),
            description: t('ripcamp.description'),
            tech: t('ripcamp.tech')
        }
    ];

    return (
        <section >
            <h1 id="projects" className="projectsTitle">{t('projectsTitle')}</h1>
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