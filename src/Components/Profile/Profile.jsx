import "./Profile.css"
import avatar from "./../../assets/woman-technologist.png"
import { useTranslation } from 'react-i18next'

function Profile() {

    const { t } = useTranslation();

    return (
        <>

            <section className="profile" id="avatar">

                <img src={avatar} alt="profile avatar" className="profileAvatar" />
                <h2 className="nameAvatar">(patricia lago espiño)</h2>
                <div className="textJob">
                    <p className="jobType">{t('jobType')}</p>
                    <p className="jobTitle">{t('jobTitle')}</p>
                </div>
            </section>
        </>
    )
}

export default Profile