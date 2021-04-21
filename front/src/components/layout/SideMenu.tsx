import * as React from 'react';

import { ThemeContext } from './ThemeColorMake';
import { GitHubIcon, ChevronLeft } from 'components/icon';
import { Category } from 'interfaces/bucket';

interface Props {
	list: Category[];
}

const MenuButton: React.FC<Category> = ({ title, sub_category, id }) => {
	return (<>
		<h2><a href={`#${id}`}>{title}</a></h2>
		{
			sub_category.map(({ title, icon, id }) => (
				<h3>
					<a href={`#${id}`}>
						<i className="material-icons">
							{icon}
						</i>
						<span>{title}</span>
					</a>
				</h3>
			))
		}
	</>)
}

/**
 * 사이드메뉴는 트리구조임
 * ex) 대메뉴
 * 		ㄴ 메뉴1
 * 		ㄴ 메뉴2
 * @param param0
 * @returns
 */
const SideMenu: React.FC<Props> = ({ list }) => {
	const [open, setopen] = React.useState(true);
	React.useEffect(() => {
		document.body.classList.add('fold');
	}, [])

	const toggleSideMenu = React.useCallback((active: boolean) => {
		setopen(active);
		document.body.classList[active ? 'add' : 'remove']('fold');
	}, []);

	return (
		<ThemeContext.Consumer>
			{(themeColor) => (
				<nav className={open ? 'fold' : ''}>
					<div id="nav">
						<div id="nav_header">
							<div id="to_github" className="" onClick={() => window.open('https://github.com/Admin0/bucket')}
								style={{
									color: themeColor,
									fill: themeColor
								}}>
								<GitHubIcon style={{
									color: themeColor,
									fill: themeColor
								}} />
								<span>MADE by JinH</span>
							</div>
							<div id="setting_bt">
								<i className="material-icons">settings</i>
								<i className="material-icons setting_arrow">play_arrow</i>
							</div>
						</div>
						{list.map(item => (
							<MenuButton {...item} />
						))}
					</div>
					<div id="nav_footer" onClick={() => toggleSideMenu(!open)}>
						<ChevronLeft className="arrow" />
					</div>
				</nav>
			)}
		</ThemeContext.Consumer>);
};

export default SideMenu;

