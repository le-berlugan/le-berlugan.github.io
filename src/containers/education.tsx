import React from 'react';
import {EducationType, EducationItemType} from "../types"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';

export interface IEducationProps {
    educationData: EducationType;
}

const Education: React.FC<IEducationProps> = (props) => {

    const getCourses = (item: EducationItemType) => {
        return item.courses.map((course: string) => (
            <li key={course}><span>{course}</span></li>
        ));
    }

    const getEducation = () => {
        return props.educationData.items.map((item: EducationItemType) => {
            return (
                <Box key={item.startDate + item.endDate} mb={2}>
                    <Paper variant="outlined" sx={{p:2}}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} sm={3}>
                                <Link href={item.link} target="_blank" rel="noreferrer noopener">
                                    <Avatar variant="square" src={process.env.PUBLIC_URL + "/images/schools/" + item.picture} alt={item.institution} sx={{ width: 120, height: 60 }} />
                                </Link>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <Typography variant="subtitle1" fontWeight={700}>
                                    {item.studyType}{item.gpa !== "" ? ` - ${item.gpa}` : ''}
                                </Typography>
                                <Typography variant="body2">
                                    <Link href={item.link} target="_blank" rel="noreferrer noopener" underline="hover">{item.institution}</Link> / {item.place}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" display="block" sx={{mb:1}}>
                                    {item.startDate}{item.endDate !== "" ? " - " : ""}{item.endDate}
                                </Typography>
                                <ul style={{paddingLeft:16, margin:0}}>{getCourses(item)}</ul>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            );
        });   
    }

    return (
        <section className="education">
            <Typography variant="h5" component="h2" gutterBottom>
                <i className="fa fa-lg fa-mortar-board" style={{marginRight:8}}></i>
                {props.educationData.title}
            </Typography>
            {getEducation()}
        </section>
    );
}

export default Education;