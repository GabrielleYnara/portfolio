import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import Home from "./pages/Home/Home";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/Projects/ProjectDetails/ProjectDetails";

import "./App.scss";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/Projects/ProjectDetails" element={<ProjectDetails />} />
                    <Route path="/Resume" element={<Resume />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default App;