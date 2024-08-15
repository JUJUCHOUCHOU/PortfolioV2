import NavBar from "../components/navbar/navbar.jsx"
import Header from "../components/header/header.jsx"
import About from "../components/about/about.jsx"
import Projects from "../components/projects/projects.jsx"
import Skills from "../components/skills/skills.jsx"
import Contact from "../components/contact/contact.jsx"

function Page(){
    return(
        <div className="pageContainer">
            <NavBar />
            <Header />
            <About />
            <Projects />
            <Skills />
            <Contact/>
        </div>
    )
}
export default Page