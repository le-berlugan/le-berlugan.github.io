import About from "./about"
import Work from "./work"
import Education from "./education"
import Languages from "./languages"
import ElementsList from './elementslist';
import {AboutType, WorkType, ElementType, EducationType, LanguagesType} from "../types"

export interface IHomeProps {
    aboutData: AboutType;
    workData: WorkType;
    skillsData: ElementType;
    educationData: EducationType;
    languagesData: LanguagesType;
    interestsData: ElementType;
}

const Home = (props:IHomeProps) => {	
    return (
        <div>
            <About aboutData={props.aboutData} />
            <Work workData={props.workData} />
            <ElementsList data={props.skillsData} />
            <Education educationData={props.educationData} />
            <Languages languagesData={props.languagesData} />
            <ElementsList data={props.interestsData} />
        </div>
    );
}
export default Home;