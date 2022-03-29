import { useEffect, useRef } from "react";
import Menu from "./menu"
import Profile from "./profile"
import {Routes ,Route} from "react-router-dom";
import Home from "./home"
import Project from "./project"
import GoogleMap from "./googlemap"
import {JsonResumeType} from "../types"
import { useState } from 'react';

export interface IResumeProps {
	data: JsonResumeType;
	onChangeLanguage: Function;
}

const Resume = (props:IResumeProps) => {	
	const ref = useRef(null);
	const [heightpapa, setHeightMap] = useState(0);

	useEffect(() => {
		if (ref !== null && ref.current !== null) {
			setHeightMap(ref.current!["offsetHeight"]);
		}
	}, []);

	const profile = props.data.basics;
	const aboutData = { 
		"title": props.data.basics.title, 
		"summary": props.data.basics.summary
	};

	return (
		<div className="container">
			<Menu menuItemData={profile.menu} />
			<div className="row">
				<aside className="col-md-3">
					<div ref={ref} className="inner">
						<Profile profileData={profile} onChangeLanguage={props.onChangeLanguage} />
					</div>
				</aside>
				<main className="col-md-9">
					<div className="inner">
						<Routes>
							<Route path="my-website/map" element={<GoogleMap mapHeight={heightpapa} />} />
							<Route path="my-website/projects" element={
								<Project projectData={props.data.project} />} >
							</Route>
							<Route path="my-website/" element={
								<Home
									aboutData={aboutData} 
									workData={props.data.work} 
									skillsData={props.data.skills} 
									educationData={props.data.education} 
									languagesData={props.data.languages} 
									interestsData={props.data.interests} 
								/>} >
							</Route>
						</Routes>
					</div>
				</main>
			</div>
		</div>
	);
}

export default Resume;