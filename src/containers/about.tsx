import React from 'react';
import { renderMarkdown } from '../utils';
import {AboutType} from "../types"
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';

export interface IAboutProps {
	aboutData: AboutType;
}

const About: React.FC<IAboutProps> = (props) => {
	const markdownData = renderMarkdown(props.aboutData.summary);
	return (
		<Paper variant="outlined" sx={{p:2}} className="about">
			<Box display="flex" alignItems="center" mb={1}>
				<PersonIcon sx={{mr:1}} />
				<Typography variant="h6" component="h2">{props.aboutData.title}</Typography>
			</Box>
			<div className="justify-align" dangerouslySetInnerHTML={markdownData} />
		</Paper>
	);
}

export default About;