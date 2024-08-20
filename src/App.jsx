import {Header} from "./components/header/Header.jsx";
import {Footer} from "./components/Footer.jsx";
import {Content} from "./components/Content.jsx";
import {Navigation} from "./components/navigation/Navigation.jsx";
import {Skills} from "./components/sections/skills/Skills.jsx";
import {Education} from "./components/sections/Education.jsx";
import {Links} from "./components/sections/Links.jsx";
import {Experience} from "./components/sections/Experience.jsx";
import {Summary} from "./components/sections/Summary.jsx";
import talent from './assets/talent.json';
import {validateResource} from "./Utils.js";


function App() {
    validateResource(talent)
    //To change section order in nav and on the page just changing the order here.
    const sections = [
        {id: 1, name: "sum", title: "Summary", content: <Summary summary={talent.summary}/>},
        {id: 2, name: "skill", title: "Skills", content: <Skills skills={talent.skills}/>},
        {id: 3, name: "exp", title: "Experience", content: <Experience experienceInfo={talent.experience}/>},
        {id: 4, name: "edu", title: "Education", content: <Education educationInfo={talent.education}/>},
        {id: 5, name: "link", title: "Links", content: <Links links={talent.links}/>}
    ];

    return (
        <>
            <Header talent={talent}/>
            <Navigation sections={sections}/>
            <Content sections={sections}/>
            <Footer/>
        </>
    )
}

export default App
