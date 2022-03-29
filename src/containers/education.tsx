import {EducationType} from "../types"

export interface IEducationProps {
    educationData: EducationType;
}

const Education = (props:IEducationProps) => {	    

    const getCourses = (item) => {
        return item.courses.map((course) => {
            return (
                <li key={course} >
                    <span>{course}</span>
                </li>
            );
        });
    }

    const getEducation = () => {
        return props.educationData.items.map((item) => {
            return (
                <div key={item.startDate + item.endDate}>
                    <div  className="row">
                        <div className="col-sm-2">
                            <a href={item.link} rel="noreferrer noopener" target="_blank"><img className="width-picture-items" alt="" src={process.env.PUBLIC_URL + "/images/schools/" + item.picture} /></a>
                        </div>
                        <div className="col-sm-10">
                            <strong>{item.studyType} {item.gpa !== "" ? " - " + item.gpa : ""}</strong> <br/>
                            <strong><a href={item.link} rel="noreferrer noopener" target="_blank">{item.institution}</a></strong> / {item.place} 
                            <div className="dates">
                                <strong>{item.startDate}{item.endDate !== "" ? " - " : ""}{item.endDate}</strong>
                            </div>
                            <ul>{getCourses(item)}</ul>
                        </div>
                    </div>  
                    <div className="divider-items"></div>
                </div>
            );
        });   
    }

    return (
        <section className="education">
            <h2 className="text-uppercase">
                <i className="fa fa-lg fa-mortar-board"></i>
                {props.educationData.title}
            </h2>
            {getEducation()}
        </section>
    );
}

export default Education;