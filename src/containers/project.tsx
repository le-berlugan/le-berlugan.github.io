import React from 'react';
import { renderMarkdown, getHighlights } from '../utils';
import {ProjectType, ProjectItemType} from "../types"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';

export interface IProjectProps {
	projectData: ProjectType;
}

const Project: React.FC<IProjectProps> = (props) => {
	const getProjectLink = (value:ProjectItemType) => {
		if (value.link !== "") {
			return (
				<IconButton aria-label="github" component={Link} href={value.link} target="_blank" rel="noreferrer noopener" size="large">
					<GitHubIcon />
				</IconButton>
			);
		}
		return null;
	}

	const getProject = () => {
		return props.projectData.items.map((val: ProjectItemType) => {
			const markdownData = renderMarkdown(val.summary);
			return (
				<Box key={val.name} mb={2}>
					<Paper variant="outlined" sx={{p:2}}>
						<Grid container spacing={2} alignItems="flex-start">
							<Grid item xs={12} sm={3}>
								<Typography variant="subtitle1" fontWeight={600}>{val.name}</Typography>
								<Typography variant="caption" color="text.secondary">{val.date}</Typography>
								<Box mt={1}>{getProjectLink(val)}</Box>
							</Grid>
							<Grid item xs={12} sm={9}>
								<div dangerouslySetInnerHTML={markdownData} />
								<Box mt={1}>
									<ul style={{paddingLeft: 16, margin: 0}}>{getHighlights(val.highlights)}</ul>
								</Box>
							</Grid>
						</Grid>
					</Paper>
				</Box>
			);
		});
	}

	return (
		<section className="project">
			<Typography variant="h5" component="h2" gutterBottom>
				<GitHubIcon fontSize="small" sx={{mr:1}} /> {props.projectData.title}
			</Typography>
			{getProject()}
		</section>
	);
}
export default Project;