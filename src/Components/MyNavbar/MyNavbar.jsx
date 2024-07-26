import "./MyNavbar.css"
import { Nav, Navbar, Container } from 'react-bootstrap';

import hamburger from "./../../assets/menuHamburger.png"
import arrow from "./../../assets/arrow.png"
import language from "./../../assets/language.png"

function MyNavbar() {


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
                            <ul>About me</ul>
                        </a>
                        <a href="#skills" className="aboutButton">
                            <ul>Skills</ul>
                        </a>
                        <a href="#projects" className="aboutButton">
                            <ul>Projects</ul>
                        </a>
                        <a href="#contact" className="aboutButton">
                            <ul>Contact</ul>
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >

    )

}
export default MyNavbar