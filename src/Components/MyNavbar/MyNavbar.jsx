import "./MyNavbar.css"
import { Nav, Navbar, Container } from 'react-bootstrap';
import hamburger from "./../../assets/menuHamburger.png"

function MyNavbar() {

    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container className="navbar-container">
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
                    < img src={hamburger} alt="hamburger icon" className="buttonIconNavbar" />
                </Navbar.Toggle>
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
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
        // <>
        //     <Container>

        //         <div>
        //             <a href="#aboutme" className="aboutButton">
        //                 <ul>About me</ul>
        //             </a>
        //             <a href="#skills" className="aboutButton">
        //                 <ul>Skills</ul>
        //             </a>
        //             <a href="#projects" className="aboutButton">
        //                 <ul>Projects</ul>
        //             </a>
        //             <a href="#contact" className="aboutButton">
        //                 <ul>Contact</ul>
        //             </a>
        //         </div>
        //         <BurguerButton />
        //     </Container>
        // </>

    )

}
export default MyNavbar