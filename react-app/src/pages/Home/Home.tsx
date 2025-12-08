import Hero from "./components/Hero/Hero"
import Intro from "./components/Intro/Intro"
import ProjectsPreview from "./components/ProjectsPreview/ProjectsPreview";
import CTA from "../../components/CallToAction/CallToAction"

function Home() {
    return <div>
        <Hero/>
        <Intro/>
        <ProjectsPreview/>
        <CTA isHomePage={true}/>
    </div>;
}

export default Home;