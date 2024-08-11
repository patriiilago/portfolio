import "./ProjectsDetails.css"

import bricksBreaker from "./../../assets/BricksBreaker.png";
import miauyuda from "./../../assets/MiauYuda.png";
import ripcamp from "./../../assets/RipCamp.png";

import { CardText, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';

const ProjectsDetails = () => {
    const { t } = useTranslation();

    const projectCards = [
        {
            image: miauyuda,
            link: "https://miauyuda.netlify.app/",
            title: t('miauyuda.title'),
            description: t('miauyuda.description'),
            tech: t('miauyuda.tech')
        },
        {
            image: bricksBreaker,
            link: "https://github.com/Blasdelezo1/brick-breaker-MVP",
            title: t('bricksBreaker.title'),
            description: t('bricksBreaker.description'),
            tech: t('bricksBreaker.tech')
        },
        {
            image: ripcamp,
            link: "https://ripcamp.netlify.app/",
            title: t('ripcamp.title'),
            description: t('ripcamp.description'),
            tech: t('ripcamp.tech')
        }
    ];

    return (
        // <section>
        //     <h1 id="projects" className={styles.projectsTitle}>{t('projectsTitle')}</h1>
        //     <article className={styles.projectsGrid}>
        //         {projectCards.map((card, index) => (
        //             <Card key={index} className={styles.projectCard}>
        //                 <a href={card.link}>
        //                     <Card.Img className={styles.projectImage} src={card.image} alt={card.title} />
        //                     <Card.Body className={styles.projectCardBody}>
        //                         <Card.Title className={styles.projectTitle}>{card.title}</Card.Title>
        //                         <Card.Text className={styles.projectDescription}>{card.description}</Card.Text>
        //                         <CardText className={styles.projectTech}>{card.tech}</CardText>
        //                     </Card.Body>
        //                 </a>
        //             </Card>
        //         ))}
        //     </article>
        // </section>

        <section className='proyectsSection'>
            <p className="titleProyectsSection">Proyects</p>
            <p className='descriptionProyectsSection'> Some code I’ve worked on</p>
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
