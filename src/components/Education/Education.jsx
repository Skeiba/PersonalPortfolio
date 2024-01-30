import { getImageUrl } from "../../utils"
import styles from "./Education.module.css"

function Education(){
    return(
        <section className={styles.container} id="education">
            <h2 className={styles.title}>Education</h2>
            <div className={styles.content}>
                <img className={styles.educationImage} src={getImageUrl("education-icon.png")} alt="my education"/>
                <ul className={styles.educationItems}>
                    <li className={styles.educationItem}>
                        <img src={getImageUrl("deust.png")} alt="deust" />
                        <div className={styles.educationItemText}>
                            <h3>Deust: Mathematics, Computer Science, Physics<br/>October 2021 - June 2023</h3>
                        </div>
                    </li>
                    <li className={styles.educationItem}>
                        <img src={getImageUrl("bachelors-degree.png")} alt="bachelor" />
                        <div className={styles.educationItemText}>
                            <h3>Bachelor degree : Data Engineering and Software Development<br/>September 2023 - Present</h3>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.summary}>
                <p>
                    I completed my Deust in Mathematics, Computer Science, and Physics from October 2021 to June 2023 and am now pursuing 
                    a Bachelor's degree in Data Engineering and Software Development, which began in September of 2023.
                    <br/>This programme expands on my existing skills and opens up new opportunities in data management and software solutions.
                    <br/>And I'm looking forward to the difficulties ahead of me.
                </p>
            </div>
        </section>
    )
}

export default Education