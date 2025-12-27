import React from 'react';
import {LanguagesType, LanguagesItemType} from "../types"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export interface ILanguagesProps {
    languagesData: LanguagesType;
}

const Languages: React.FC<ILanguagesProps> = (props) => {
    const getLanguages = () => {
        return props.languagesData.items.map((item: LanguagesItemType, index) => (
            <Grid item key={"language_" + index} xs={12} sm={6} md={3}>
                <Paper variant="outlined" sx={{p:2, textAlign:'center'}}>
                    <Box component="img" src={process.env.PUBLIC_URL + "/images/flag_maps/" + item.link} alt={item.language} sx={{width: '100%', height: 'auto'}} />
                    <Typography variant="subtitle1" sx={{mt:1}}>{item.language}</Typography>
                    <Typography variant="body2" color="text.secondary">{item.fluency}</Typography>
                </Paper>
            </Grid>
        ));
    }

    return (
        <section className="languages">
            <Typography variant="h5" component="h2" gutterBottom>
                <i className="fa fa-lg fa-globe" style={{marginRight:8}}></i>
                {props.languagesData.title}
            </Typography>
            <Grid container spacing={2}>
                {getLanguages()}
            </Grid>
        </section>
    );
}
export default Languages;