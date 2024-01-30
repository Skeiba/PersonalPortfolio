import { getImageUrl } from "../../utils"
import styles from "./Hero.module.css"
import cv from "../../assets/cv.pdf"

function Hero (){
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Salaheddine</h1>
                <p className={styles.description}>
                I'm a third-year student at the Faculty of Sciences and Technologies in Al Hoceima, 
                specializing in "Data Engineering and Software Development" .
                <br/>Join me in exploring the dynamic world of data engineering and web development!
                <br/>If you have any questions or just want to connect, feel free to reach out.
                </p>
                <div className={styles.buttons}>
                    <a className={styles.button} href="mailto:skeiba@protonmail.com">Contact me</a>
                    <a className={styles.button} download="cv" href={cv}>Download CV</a>
                </div>
                
            </div>
            <img className={styles.heroImg} src={getImageUrl("port-2.jpg")} alt="my image"/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
}

export default Hero