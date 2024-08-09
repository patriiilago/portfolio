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
                    "greeting": "Hi!",
                    "myName": "I'm Patricia",
                    "lastName": "Lago Espiño",
                    "jobTitle": "Full-Stack Web Developer",
                    "profileTitle": "About Me",
                    "profileMyName": "I'm Patricia Lago,",
                    "profileDescription1": " a Junior Full Stack developer on an exciting journey of exploration and creativity in the dynamic world of web development. My personal projects have allowed me to hone my skills and push my own limits. I love collaborating and working in a team.",
                    "profileDescription2": "Besides programming, I enjoy sports, especially water sports and road cycling. These activities give me a sense of freedom and peace, feeding my creativity and focus.",
                    "downloadCV": "Download CV",
                    "skillsTitle": "Skills",
                    "projectsTitle": "Projects",
                    "projectsTitle": "Projects",
                    "miauyuda": {
                        "title": "Miauyuda",
                        "description": "MiauYuda is a responsive application created specifically for pet owners looking for the best veterinary care. This platform allows you to select the veterinarian that best suits your pet's needs, offering the convenience of online consultations at any time of the day.",
                        "tech": "React Bootstrap NodeJS Express MongoDB"
                    },
                    "bricksBreaker": {
                        "title": "Bricks Breaker",
                        "description": "Bricks Breaker is an addictive and classic game where the main objective is to control a paddle to bounce a ball and break all the bricks arranged at the top of the screen. With each hit, the bricks are destroyed. The game requires precision skills and quick reflexes to keep the ball from falling.",
                        "tech": "HTML CSS JavaScript"
                    },
                    "ripcamp": {
                        "title": "Ripcamp",
                        "description": "RipCamp is an innovative web application designed to facilitate the connection between students of Data Analytics and Web Development bootcamps.The platform allows students to collaborate and solve technical questions and problems in an efficient, fast and collaborative way.",
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
                    "greeting": "Hola!",
                    "myName": "Soy Patricia",
                    "lastName": "Lago Espiño",
                    "jobTitle": "Desarrolladora Full-Stack Web",
                    "profileTitle": "Sobre mí",
                    "profileMyName": "Soy Patri Lago,",
                    "profileDescription1": " desarrolladora Junior Full Stack en un emocionante viaje de exploración y creatividad en el dinámico mundo del desarrollo web. Mis proyectos personales me han permitido perfeccionar mis habilidades y superar mis propios límites. Me encanta colaborar y trabajar en equipo.",
                    "profileDescription2": "Además de programar, disfruto de los deportes, sobretodo los deportes acuáticos y el ciclismo de carretera.Estas actividades me brindan una sensación de libertad y paz, alimentando mi creatividad y enfoque.",
                    "downloadCV": "Descargar CV",
                    "skillsTitle": "Habilidades",
                    "projectsTitle": "Proyectos",

                    "projectsTitle": "Proyectos",
                    "miauyuda": {
                        "title": "Miauyuda",
                        "description": "MiauYuda es una aplicación responsiva creada específicamente para dueños de mascotas que buscan la mejor atención veterinaria. Esta plataforma permite seleccionar al veterinario que mejor se adapte a las necesidades de las mascotas, ofreciendo la conveniencia de consultas en línea en cualquier momento del día.",
                        "tech": "React Bootstrap NodeJS Express MongoDB"
                    },
                    "bricksBreaker": {
                        "title": "Bricks Breaker",
                        "description": "Bricks Breaker es un juego adictivo y clásico donde el objetivo principal es controlar una paleta para hacer rebotar una bola y romper todos los ladrillos dispuestos en la parte superior de la pantalla. Con cada golpe, los ladrillos se destruyen. El juego requiere habilidades de precisión y reflejos rápidos para evitar que la bola caiga.",
                        "tech": "HTML CSS JavaScript"
                    },
                    "ripcamp": {
                        "title": "Ripcamp",
                        "description": "RipCamp es una aplicación web innovadora diseñada para facilitar la conexión entre estudiantes de bootcamps especializados en Data Analytics y Desarrollo Web. La plataforma permite a los estudiantes colaborar y resolver dudas y problemas técnicos de manera eficiente, rápida y colaborativa.",
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
