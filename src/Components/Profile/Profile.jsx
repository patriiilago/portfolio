import "./Profile.css"
import avatar from "./../../assets/woman-technologist.png"
import { useTranslation } from 'react-i18next'

function Profile() {

    const { t } = useTranslation();

    return (

        <article className="profileArticle">

            <section className="profile" id="avatar">

                <div className="textJob">

                    <p className="greeting">{t('greeting')}</p>

                    <p className="myName">{t('myName')}</p>

                    <p className="lastName">{t('lastName')}</p>

                    <p className="jobTitle">{t('jobTitle')}</p>

                </div>

                <img src={avatar} alt="profile avatar" className="profileAvatar" />

            </section>

        </article>
    )
}

export default Profile