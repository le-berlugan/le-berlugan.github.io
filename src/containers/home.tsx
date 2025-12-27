import About from "./about"
import Work from "./work"
import Education from "./education"
import Languages from "./languages"
import ElementsList from './elementslist';
import {AboutType, WorkType, ElementType, EducationType, LanguagesType} from "../types"
import React from 'react';
import Stack from '@mui/material/Stack';

export interface IHomeProps {
    aboutData: AboutType;
    workData: WorkType;
    skillsData: ElementType;
    educationData: EducationType;
    languagesData: LanguagesType;
    interestsData: ElementType;
}

const Home: React.FC<IHomeProps> = (props) => { 
    return (
        <Stack spacing={4}>
            <About aboutData={props.aboutData} />
            <Work workData={props.workData} />
            <ElementsList data={props.skillsData} />
            <Education educationData={props.educationData} />
            <Languages languagesData={props.languagesData} />
            <ElementsList data={props.interestsData} />
        </Stack>
    );
}
export default Home;