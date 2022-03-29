import {LanguagesType, LanguagesItemType} from "../types"

export interface ILanguagesProps {
    languagesData: LanguagesType;
}

const Languages = (props:ILanguagesProps) => {	
    const getLanguages = () => {
		return props.languagesData.items.map((item: LanguagesItemType, index) => {
            return (
                <div key={"language_" + index} className="col-md-3">
                    <img className="width-full" alt="" src={process.env.PUBLIC_URL + "/images/flag_maps/" + item.link} />
                    <h3 className="text-center language-title-text">{item.language}</h3>
                    <p className="text-center language-text">{item.fluency}</p>
                </div>
            );
        });
    }

    return (
        <section className="languages">
            <h2 className="text-uppercase">
                <i className="fa fa-lg fa-globe"></i>
                {props.languagesData.title}
            </h2>
            <div className="row">
                {getLanguages()}
            </div>
        </section>
    );
}
export default Languages;