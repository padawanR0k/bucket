import { useState } from "react";
import { ThemeContext } from "./ThemeColorMake";

const SubHeaderButton: React.FC<{
	onClick: Function,
	text: string,
	icon: string,
	active: boolean
}> = ({
	text,
	icon,
	onClick,
	active
}) => {
	return (
		<div onClick={() => onClick()}
			className={`filter_bt ${active ? 'on' : ''}`} id="filter_11">
			<i className="material-icons">{icon}</i>
			<span>{text}</span>
			<span className="ink_bar"></span>
		</div>
	)
}
enum BUTTON_STATUS {
	ALL,
	ACHIVED,
	NOT_ACHIVED,
	FAIL
};

const ButtonInterface = [
	{type: BUTTON_STATUS.ALL, text: "전체" ,icon: "indeterminate_check_box"},
	{type: BUTTON_STATUS.ACHIVED, text: "달성" ,icon: "check_box"},
	{type: BUTTON_STATUS.NOT_ACHIVED, text: "미달성" ,icon: "check_box_outline_blank"},
	{type: BUTTON_STATUS.FAIL, text: "실패" ,icon: "priority_high"}
]

enum VIEW_TYPE {
	'view_stream',
	'dashboard'
}

const SubHeader = () => {
	const [selecetedType, setselecetedType] = useState(BUTTON_STATUS.ALL)
	const [currentView, setcurrentView] = useState(VIEW_TYPE[0]);

	return (
		<ThemeContext.Consumer>
			{(color) => (
			<div id="sub_header" className="fold" style={{background: color}}>
				<div id="line1" >
					{ButtonInterface.map(item => (
						<SubHeaderButton
							active={item.type === selecetedType}
							onClick={() => setselecetedType(item.type)}
							text={item.text}
							icon={item.icon} />
					))}
					<div className="disabled" id="column_bt"
							onClick={() => setcurrentView(currentView === VIEW_TYPE[0] ? VIEW_TYPE[1] : VIEW_TYPE[0])}>
							<i className="material-icons">{currentView}</i>
					</div>
				</div>
			</div>
			)}
		</ThemeContext.Consumer>
	);
}

export default SubHeader;