import Hero from "./components/Hero/Hero"
import Intro from "./components/Intro/Intro"
import ProjectsPreview from "./components/ProjectsPreview/ProjectsPreview";
import Projects from "./components/ProjectsPreview/ProjectsPreview"

function Home() {
    return (
        <div>
            <Hero/>
            <Intro/>
            <ProjectsPreview/>
        </div>
    );
}

export default Home;