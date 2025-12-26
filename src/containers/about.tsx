import { renderMarkdown } from '../utils';
import {AboutType} from "../types"

export interface IAboutProps {
    aboutData: AboutType;
}

const About = (props:IAboutProps) => {		
	const markdownData = renderMarkdown(props.aboutData.summary); 
	return (
		<section className="about">
			<h2 className="text-uppercase">
				<i className="fa fa-lg fa-user"></i>
				{props.aboutData.title}
			</h2>
			<div className="justify-align" dangerouslySetInnerHTML={markdownData} />
		</section>
	);
}

export default About;