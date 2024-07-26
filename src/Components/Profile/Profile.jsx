import "./Profile.css"
import avatar from "./../../assets/woman-technologist.png"

function Profile() {


    return (
        <>

            <section className="profile">

                <img src={avatar} alt="profile avatar" className="profileAvatar" />
                <h2 className="nameAvatar">(patricia lago espiño)</h2>
                <p className="jobType">Full-Stack</p>
                <p className="jobTitle">Developer</p>

            </section>
        </>
    )
}

export default Profile