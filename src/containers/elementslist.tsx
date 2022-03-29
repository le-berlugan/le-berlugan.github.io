//import * as React from 'react';
import {ElementType, ElementItemType} from "../types"

export interface IElementsListProps {
    data: ElementType;
}
const ElementsList = (props:IElementsListProps) => {	
    const getItems = (items:ElementItemType) => {
        const keywordsLength = items.keywords.length-1;
        return items.keywords.map((item, index) => {
			return (
				<span key={"elements_list_" + item + "_" + index} >{item}{index !== keywordsLength ? ", " : ""} </span>
			);				
        });
    }

    const getElements = () => {
        return props.data.items.map((element: ElementItemType, index) => {
            return (
                <div className="row" key={"elements_" + element.name + "_" + index}>
                    <div className="col-sm-2 skill_name">
                        <strong>{element.name}</strong>
                    </div>
                    <div className="col-sm-10">
                        {getItems(element)}
                    </div>
                </div>
            );
        });
    }

    return (
        <section className="skills">
            <h2 className="text-uppercase">
                <i className="fa fa-lg fa-code"></i>
                {props.data.title}
            </h2>
            {getElements()}
        </section>
    );
    
}

export default ElementsList;