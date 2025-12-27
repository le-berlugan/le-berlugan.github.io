import './App.css';
import Resume from "./containers/resume";
import Menu from './containers/menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { en } from './data/en.js'
import { fr } from './data/fr.js';
import {JsonResumeType} from "./types"
import { useState } from 'react';

const App = () => {	
	const data: {[key: string]: JsonResumeType} = {"fr": fr, "en": en};
	const nav_language: string = navigator.language.toLowerCase();
	const [language, setLanguage] = useState((nav_language === "fr-fr") ? "fr": "en");

	const changeLanguage = (language: string): void => {
		setLanguage(language);
	}

	return (
		<>
			<AppBar position="fixed" color="primary" elevation={2}>
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ mr: 2 }}>
							Le Berlugan — CV
						</Typography>
						<Menu menuItemData={data[language].basics.menu} />
					</Toolbar>
				</AppBar>
				<Container maxWidth="lg" sx={{ paddingTop: '88px' }}>
					<Resume data={data[language]} onChangeLanguage={changeLanguage} />
				</Container>
		</>
	);
}

export default App;