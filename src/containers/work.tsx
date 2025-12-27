import React from 'react';
import { renderMarkdown, getHighlights } from '../utils';
import {WorkType, WorkItemType} from "../types"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

export interface IWorkProps {
	workData: WorkType;
}

const Work: React.FC<IWorkProps> = (props) => {
	const getWorkAttachments = (value:WorkItemType) => {
		return value.attachments.map((item, index) => {
			return (
				<IconButton key={"attachment_" + index} component={Link} href={process.env.PUBLIC_URL + "/pdf/attachments/" + item.url} target="_blank" rel="noreferrer noopener" aria-label={item.label}>
					<i className={item.icon} />
				</IconButton>
			);
		});
	}

	const getWorkExperience = () => {
		return props.workData.items.map((val:WorkItemType, index) => {
			const markdownData = renderMarkdown(val.summary);
			return (
				<Box key={"work_experience_" + index} mb={2}>
					<Paper variant="outlined" sx={{p:2}}>
						<Grid container spacing={2} alignItems="flex-start">
							<Grid item xs={12} sm={3}>
								<Box component={Link} href={val.website} target="_blank" rel="noreferrer noopener" sx={{display: 'block', textAlign: 'center'}}>
									<Avatar
										variant="square"
										src={process.env.PUBLIC_URL + "/images/companies/" + val.picture}
										alt={val.company}
										sx={{ width: 120, height: 60, mx: 'auto' }}
									/>
								</Box>
								<Box mt={1} display="flex" justifyContent="center">{getWorkAttachments(val)}</Box>
							</Grid>
							<Grid item xs={12} sm={9}>
								<Typography variant="subtitle1" fontWeight={700}>
									{val.position}, <Link href={val.website} target="_blank" rel="noreferrer noopener">{val.company}</Link> / {val.place}
								</Typography>
								<Typography variant="caption" color="text.secondary" display="block" sx={{mb:1}}>
									{val.startDate} - {val.endDate}
								</Typography>
								<div className="justify-align" dangerouslySetInnerHTML={markdownData} />
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
		<section className="work">
			<Typography variant="h5" component="h2" gutterBottom>
				<i className="fa fa-lg fa-cubes" style={{marginRight:8}}></i> {props.workData.title}
			</Typography>
			{getWorkExperience()}
		</section>
	);
}

export default Work;