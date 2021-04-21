import React from 'react';
import { Container } from '@material-ui/core';
import Header from './Header';
import { Redirect, Route } from 'react-router-dom'

import routes from 'components/routes';
import SideMenu from './SideMenu';
import ThemeColorMaker from './ThemeColorMake';

import { mockData } from './mockdata';
import SubHeader from './SubHeader';

interface Props {

}

interface States {
	open: boolean
}

class Layout extends React.Component<Props, States> {
	constructor(props: Props) {
		super(props);
		this.state = {
			open: false
		}
	}

	toggleSideMenu = () => {
		this.setState(({ open }) => ({ open: !open }))
	}

	render() {
		const { open } = this.state;

		return (
			<ThemeColorMaker>
				{
					routes.routeList.map((item, i) => {
						const Comp = item.component!;
						return (
							<Route
							key={i}
							path={item.path}
							render={props => <>
									<Header toggle={this.toggleSideMenu} sub_title={item.title} />
									<Comp {...props} {...this.props}/>
								</>}
								{...this.props}/ >
						)
				})
				}
				<Redirect from="/" to="/main" />
			</ThemeColorMaker>
		)
	}
}

export default Layout;