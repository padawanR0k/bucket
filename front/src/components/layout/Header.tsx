import React from "react"
import { ThemeContext } from "./ThemeColorMake";

const Header: React.FC<{
	sub_title: string,
	toggle: Function
}> = ({sub_title, toggle}) => {
	const toggleSideBar = () => {
		toggle()
		console.log('사이드바 토글 액션 추가 필요!');
		// if ($('nav').attr('class') != 'on') { $('nav, #nav_bg').addClass('on'); } else { $('nav, #nav_bg').removeClass('on'); }
	}

	return (<ThemeContext.Consumer>
		{(themeColor) => (
			<header style={{ background: themeColor }}>
				<h1>
					<i
						id="nav_on"
						onClick={() => toggleSideBar()}
						className="material-icons">
						menu
					</i>
					Bucket List {sub_title ? `- ${sub_title}` : ''}
					{/* <class class="percentage">50% (251/505)</class> */}
				</h1>
			</header>
		)}
	</ThemeContext.Consumer>)
}

export default Header;