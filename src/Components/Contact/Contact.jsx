import "./Contact.css"

function Contact() {
    return (
        <div className="contactMe">
            <h1 id="contact" className="contactTitle">Contact</h1>
            <section className="contactBox">

                <form action="https://formspree.io/f/mjkbkqbq" method="post">
                    <div className="formGroup">
                        <label htmlFor="name" hidden>
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email" hidden>
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="message" hidden>
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            required
                        ></textarea>
                    </div>
                    <input className="buttonContact" type="submit" value="Send me a message @" />
                </form>
            </section>
        </div>
    );
}

export default Contact;