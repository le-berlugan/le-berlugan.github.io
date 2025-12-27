//import * as React from 'react';
import React from 'react';
import {ElementType, ElementItemType} from "../types"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

export interface IElementsListProps {
    data: ElementType;
}

const ElementsList: React.FC<IElementsListProps> = (props) => {
    const renderKeywords = (items: ElementItemType) => {
        return items.keywords.map((kw, idx) => (
            <Chip key={`kw_${kw}_${idx}`} label={kw} size="small" sx={{mr:1, mb:1}} />
        ));
    }

    const getElements = () => {
        return props.data.items.map((element: ElementItemType, index) => (
            <Grid container spacing={2} alignItems="center" key={`elements_${element.name}_${index}`} sx={{mb:1}}>
                <Grid item xs={12} sm={3}>
                    <Typography variant="subtitle2" fontWeight={700}>{element.name}</Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Box display="flex" flexWrap="wrap">{renderKeywords(element)}</Box>
                </Grid>
            </Grid>
        ));
    }

    return (
        <section className="skills">
            <Typography variant="h5" component="h2" gutterBottom>
                <i className="fa fa-lg fa-code" style={{marginRight:8}}></i>
                {props.data.title}
            </Typography>
            {getElements()}
        </section>
    );
}

export default ElementsList;