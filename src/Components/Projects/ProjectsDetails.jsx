import "./ProjectsDetails.css"

import miauyuda from "./../../assets/MiauYuda.png"
import RipCamp from "./../../assets/RipCamp.png"
import bricksBreaker from "./../../assets/BricksBreaker.png"

import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';

const ProjectsDetails = () => {

    const { t } = useTranslation();

    const projectCards = [

        {
            image: miauyuda,
            link: "https://miauyuda-project.netlify.app/",
            title: t('miauyuda.title'),
            description: t('miauyuda.description'),
            tech: t('miauyuda.tech')
        },
        {
            image: bricksBreaker,
            link: "https://bricks-breaker-pcgame.netlify.app/",
            title: t('bricksBreaker.title'),
            description: t('bricksBreaker.description'),
            tech: t('bricksBreaker.tech')
        },
        {
            image: RipCamp,
            link: "https://ripcamp-project.netlify.app/",
            title: t('ripcamp.title'),
            description: t('ripcamp.description'),
            tech: t('ripcamp.tech')
        }
    ];

    return (

        <section className='proyectsSection' id="projects">
            <p className="titleProyectsSection">{t('titleProyectsSection')}</p>
            <p className='descriptionProyectsSection'> {t('descriptionProyectsSection')}</p>
            <article className="proyectsCardBox">
                {projectCards.map((card, index) => (
                    <Card key={index} className="proyectsCard">
                        <a href={card.link}>
                            <Card.Img className="projectImage" src={card.image} alt={card.title} />
                            <Card.Body className="projectCardBody">
                                <Card.Title className="projectTitle">{card.title}</Card.Title>
                                <Card.Text className="projectDescription" >{card.description}</Card.Text>
                            </Card.Body>
                        </a>
                    </Card>
                ))}
            </article>
        </section>
    );
}

export default ProjectsDetails;
