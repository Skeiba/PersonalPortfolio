import style from "./Skills.module.css"
import skills from "../../data/skills.json"
import { getImageUrl } from "../../utils"

function Skills(){
    return(
        <section className={style.container} id="skills">
            <h2 className={style.title}>Skills</h2>
            <div className={style.content}>
                <div className={style.skills}>{skills.map((skill, id) => {
                    return(
                        <div className={style.skill} key={id}>
                            <div className={style.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                         </div> 
                    )})
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills