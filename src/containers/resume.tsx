import Profile from "./profile"
import {Routes ,Route} from "react-router-dom";
import Home from "./home"
import Project from "./project"
import GoogleMap from "./googlemap"
import {JsonResumeType} from "../types"
import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export interface IResumeProps {
	data: JsonResumeType;
	onChangeLanguage: Function;
}

const Resume = (props:IResumeProps) => { 

	const profile = props.data.basics;
	const aboutData = { 
		"title": props.data.basics.title, 
		"summary": props.data.basics.summary
	};

	return (
		<Box>
			<Grid container spacing={3}>
				<Grid item xs={12} md={3}>
					<Box sx={{ position: { md: 'sticky' }, top: 110 }}>
						<Profile profileData={profile} onChangeLanguage={props.onChangeLanguage} />
					</Box>
				</Grid>
				<Grid item xs={12} md={9}>
					<Paper elevation={1} sx={{ p: 2 }}>
						<Routes>
							<Route path={"/map"} element={<GoogleMap />} />
							<Route path={"/projects"} element={<Project projectData={props.data.project} />} />
							<Route path={"/"} element={
								<Home
									aboutData={aboutData}
									workData={props.data.work}
									skillsData={props.data.skills}
									educationData={props.data.education}
									languagesData={props.data.languages}
									interestsData={props.data.interests}
								/>
							} />
						</Routes>
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Resume;
