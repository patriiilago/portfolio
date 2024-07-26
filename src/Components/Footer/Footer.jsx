import "./Footer.css"
import whatsapp from "./../../assets/whatsapp.png"
import git from "./../../assets/git.png"
import linkedin from "./../../assets/linkedin.png"

const Footer = () => {

    return (
        <section className="footer" >
            <div className="connect">
                <a href="https://api.whatsapp.com/send?phone=680294444">
                    <ul>
                        <img src={whatsapp} alt="WhatsApp Icon" className="whatsappIcon" />
                    </ul>
                </a>
                <a href="https://github.com/patriiilago?tab=repositories">
                    <ul>
                        <img src={git} alt="GitHub Icon" className="githubIcon" />
                    </ul>
                </a>
                <a href="https://www.linkedin.com/in/patri-lago/">
                    <ul>
                        <img src={linkedin} alt="LinkedIn Icon" className="linkedinIcon" />
                    </ul>
                </a>
            </div>

            <p className="textFooter">

                &copy; Patricia Lago Espiño 🤍 2024

            </p>

        </section>

    )

}

export default Footer