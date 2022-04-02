import { renderMardown, getHighlights } from '../utils';
import {WorkType, WorkItemType} from "../types"

export interface IWorkProps {
    workData: WorkType;
}

const Work = (props:IWorkProps) => {
    const getWorkAttachments = (value:WorkItemType) => {
		return value.attachments.map((item, index) => {
			return (
				<a key={"attachment_" + index} href={process.env.PUBLIC_URL + "/pdf/" + item.url} rel="noreferrer noopener" className="tooltips-work-exp" target='_blank'><i className={item.icon}></i><span>{item.label}</span></a>
			);
		});
    }

    const getWorkExperience = () => {
		return props.workData.items.map((val:WorkItemType, index) => {
			const markdownData = renderMardown(val.summary);
			return (
				<div key={"work_experience_" + index}>
					<div className="row">
						<div className="col-sm-2">
							<a href={val.website} rel="noreferrer noopener" target="_blank"><img className="width-picture-items" src={process.env.PUBLIC_URL + "/images/companies/" + val.picture} alt="firm_picture" /></a>  
							<div className="work-exp-link">
								{getWorkAttachments(val)}
							</div>						
						</div>
						<div className="col-sm-10">
							<strong>
								{val.position}, <a href={val.website} rel="noreferrer noopener" target="_blank">{val.company}</a> / {val.place}
								<div className="dates">
									{val.startDate} - {val.endDate}
								</div>							
							</strong>
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
		<section className="work">
			<h2 className="text-uppercase">
				<i className="fa fa-lg fa-cubes"></i>
				{props.workData.title}
			</h2>
			{getWorkExperience()}
		</section>
	);
}

export default Work;