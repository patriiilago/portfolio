import "./MyNavbar.css"

import hamburger from "./../../assets/menuHamburger.png"
import arrow from "./../../assets/arrow.png"
import language from "./../../assets/language.png"

import { Nav, Navbar, Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

function MyNavbar() {

    const { t } = useTranslation()


    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container className="navbar-container">
                <div className="navbar-header">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
                        < img src={hamburger} alt="hamburger icon" className="hamburgerIcon" />
                    </Navbar.Toggle>

                    <div className="iconsNavbar">
                        <a href="#avatar" className="arrowIconNavbar">
                            <ul>
                                <img src={arrow} alt="arrowIconNavbar" />
                            </ul>
                        </a>
                        <a href="#language">
                            <ul>
                                <img src={language} alt="Language Icon" className="iconLanguageNavbar" />
                            </ul>
                        </a>
                    </div>
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navigation">
                        <a href="#aboutme" className="aboutButton">
                            <ul>{t('aboutMe')}</ul>
                        </a>
                        <a href="#skills" className="aboutButton">
                            <ul>{t('skills')}</ul>
                        </a>
                        <a href="#projects" className="aboutButton">
                            <ul>{t('projects')}</ul>
                        </a>
                        <a href="#contact" className="aboutButton">
                            <ul>{t('contact')}</ul>
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >

    )

}
export default MyNavbar