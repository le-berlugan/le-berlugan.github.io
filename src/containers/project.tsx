import { renderMardown, getHighlights } from '../utils';
import {ProjectType, ProjectItemType} from "../types"

export interface IProjectProps {
    projectData: ProjectType;
}

const Project = (props:IProjectProps) => {
    const getProjectLink = (value:ProjectItemType) => {
		if (value.link !== "") {
			return(
				<div className="project-link">
					<a href={value.link} className="tooltips" rel="noreferrer noopener" target='_blank'><i className='fa fa-2x fa-lg fa-github'></i><span>Github</span></a>
				</div>
			);
		}
    }

    const getProject = () => {
		return props.projectData.items.map((val: ProjectItemType) => {
			const markdownData = renderMardown(val.summary);
			return (
				<div key={val.name}>
					<div className="row">
						<div className="col-sm-2">
						<strong>{val.name}</strong>
						<div className="dates">
							<strong>{val.date}</strong>
						</div>					
						{getProjectLink(val)}
						</div>
						<div className="col-sm-10">
							<div className="justify-align" dangerouslySetInnerHTML={markdownData} />
							<ul className="skills-list list-inline">{getHighlights(val.highlights)}</ul>
						</div>
					</div>
					<div className="divider-items"></div>
				</div>
			);
		});
    }

	return (
		<section className="project">
			<h2 className="text-uppercase">
				<i className="fa fa-lg fa-terminal"></i> {props.projectData.title}
			</h2>
			{getProject()}
		</section>
	);
}
export default Project;