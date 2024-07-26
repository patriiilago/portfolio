import "./IconsRight.css"
import language from "./../../assets/language.png"
import arrow from "./../../assets/arrow.png"

const IconsRight = () => {
    return (
        <section className="iconsRight">
            <a href="#avatar">
                <ul>
                    <img src={arrow} alt="Arrow Icon" className="iconArrow" />
                </ul>
            </a>
            <a href="#language">
                <ul>
                    <img src={language} alt="Language Icon" className="iconLanguage" />
                </ul>
            </a>
            <div className="verticalLineRight"></div>
        </section>
    );
};

export default IconsRight;
