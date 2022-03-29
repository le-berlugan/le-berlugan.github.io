import {Link} from "react-router-dom";
import {MenuType} from "../types"

export interface IMenuProps {
    menuItemData: Array<MenuType>;
}

const Menu = (props:IMenuProps) => {
	const getItems = () => {
		return props.menuItemData.map((item, index) => {
			return (
				<li key={"menu_" + index}>
					<Link className="skills-list"to={"my-website" + item.url}><span className="label"><span className={item.icon}></span>{item.label}</span></Link>
				</li>
			);
		});	
	}

	return (
		<div className="menu">
			<nav>
				<ul className="skills-list"> 
					{getItems()}
				</ul>
			</nav>
		</div>
	);
}
export default Menu;