import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App