import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Resume from "./containers/resume";
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
		<Resume data={data[language]} onChangeLanguage={changeLanguage} />
	);
}

export default App;