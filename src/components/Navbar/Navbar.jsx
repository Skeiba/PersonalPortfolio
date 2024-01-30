import styles from "./Navbar.module.css"
import { useState } from "react"
import {getImageUrl} from "../../utils"

function Navbar (){
    const [menuOpen, setMenuOpen] = useState(false)
    return(
        <nav className={styles.navbar}>
            <a className={styles.title} href="/"><img src={getImageUrl("home-icon-2.png")} alt="home"/></a>
            <div className={styles.menu}>
                <img 
                className={styles.menuBtn} 
                src={menuOpen ? getImageUrl("close-menu.png") : getImageUrl("menu-burger.png")}
                onClick={()=>setMenuOpen(!menuOpen)}
                />
                <ul 
                className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={()=>setMenuOpen(false)}
                >
                    <li><a href="#education">Education</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar