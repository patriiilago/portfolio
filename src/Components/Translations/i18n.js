import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "jobType": "Full-Stack",
                    "jobTitle": "Developer",
                    "profileTitle": "About Me",
                    "profileMyName": "I am Patri Lago,",
                    "profileDescription1": "Full stack developer with excellent communication skills. I love collaborating and working as a team.",
                    "profileDescription2": "Apart from programming, I also enjoy sports, especially water sports and cycling.",
                    "downloadCV": "Download CV",
                    "skillsTitle": "Skills",
                    "projectsTitle": "Projects",
                    "projectsTitle": "Projects",
                    "miauyuda": {
                        "title": "Miauyuda",
                        "description": "Miauyuda is a responsive application designed for people who have pets and need to consult a vet. With this application you can choose which professional best suits your pet's needs and have online consultations at any time of the day.",
                        "tech": "React Bootstrap NodeJS Express MongoDB"
                    },
                    "bricksBreaker": {
                        "title": "Bricks Breaker",
                        "description": "The game consists of a paddle that the player controls to bounce a ball and break bricks arranged at the top of the screen.",
                        "tech": "HTML CSS JavaScript"
                    },
                    "ripcamp": {
                        "title": "Ripcamp",
                        "description": "RipCamp is a SPA that connects current students of the Data Analytics and Web Development bootcamps to help them solve technical questions and problems. Development and deployment of a custom API with json server.",
                        "tech": "HTML CSS JavaScript React Bootstrap"
                    },
                    "contactTitle": "Contact",
                    "namePlaceholder": "Name",
                    "emailPlaceholder": "Email",
                    "messagePlaceholder": "Message",
                    "submitButton": "Send me a message @",
                    "aboutMe": "About me",
                    "skills": "Skills",
                    "projects": "Projects",
                    "contact": "Contact",

                }
            },
            es: {
                translation: {
                    "jobType": "Full-Stack",
                    "jobTitle": "Desarrolladora",
                    "profileTitle": "Sobre mí",
                    "profileMyName": "Soy Patri Lago,",
                    "profileDescription1": "Desarrolladora full stack con excelentes habilidades de comunicación. Me encanta colaborar y trabajar en equipo.",
                    "profileDescription2": "Además de programar, también disfruto de los deportes, especialmente los deportes acuáticos y el ciclismo.",
                    "downloadCV": "Descargar CV",
                    "skillsTitle": "Habilidades",
                    "projectsTitle": "Proyectos",

                    "projectsTitle": "Proyectos",
                    "miauyuda": {
                        "title": "Miauyuda",
                        "description": "Miauyuda es una aplicación responsiva diseñada para personas que tienen mascotas y necesitan consultar a un veterinario. Con esta aplicación puedes elegir qué profesional se adapta mejor a las necesidades de tu mascota y tener consultas en línea en cualquier momento del día.",
                        "tech": "React Bootstrap NodeJS Express MongoDB"
                    },
                    "bricksBreaker": {
                        "title": "Bricks Breaker",
                        "description": "El juego consiste en una paleta que el jugador controla para hacer rebotar una bola y romper ladrillos dispuestos en la parte superior de la pantalla.",
                        "tech": "HTML CSS JavaScript"
                    },
                    "ripcamp": {
                        "title": "Ripcamp",
                        "description": "RipCamp es una SPA que conecta a los estudiantes actuales de los bootcamps de Data Analytics y Desarrollo Web para ayudarles a resolver dudas y problemas técnicos. Desarrollo y despliegue de una API personalizada con json server.",
                        "tech": "HTML CSS JavaScript React Bootstrap"
                    },
                    "contactTitle": "Contacto",
                    "namePlaceholder": "Nombre",
                    "emailPlaceholder": "Correo electrónico",
                    "messagePlaceholder": "Mensaje",
                    "submitButton": "Enviarme un mensaje @",
                    "aboutMe": "Sobre mí",
                    "skills": "Habilidades",
                    "projects": "Proyectos",
                    "contact": "Contacto",



                }
            }
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
