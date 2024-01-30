import styles from "./Contact.module.css"
import { getImageUrl } from "../../utils"

function Contact(){
    return(
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Lets's connect!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contacts/mail-logo.png")} alt="email" />
                    <a href="mailto:skeiba@protonmail.com">skeiba@protonmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contacts/github-logo.png")} alt="github" />
                    <a href="https://github.com/Skeiba">github.com/Skeiba</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contacts/linkedin-dark-logo.png")} alt="linkedin" />
                    <a href="https://www.linkedin.com/in/salaheddine-bahlaouane-173a35239/">linkedin.com/salaheddine</a>
                </li>
            </ul>
        </footer>
    )
}

export default Contact