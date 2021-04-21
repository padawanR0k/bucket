import react from "react";

import DashBoard from 'components/dashboard/dashboard';
import Card from 'components/card/card';
import { CategoryTitle, CategorySubTitle } from 'components/paragraph/categoryTitle';
import BucketList from 'components/bucketList/bucketList';
import SubHeader from 'components/layout/SubHeader';
import SideMenu from 'components/layout/SideMenu';

import './main.scss';
import { mockDataMain } from "./mock";

const Main: react.FC = () => {
	return (<>
		<SubHeader />
		<SideMenu list={mockDataMain.category} />
		<main className="main_container">
			<DashBoard />
			{mockDataMain.category.map(category => {
				return (<>
					<CategoryTitle
						title={category.title}
						cnt_all={100}
						cnt_done={46}
						id={category.id} />
					{category.sub_category.map(item => (<>
						<CategorySubTitle
							icon={item.icon}
							title={item.title}
							id={item.id}
							cnt_all={100}
							cnt_done={40}/>
						{item.groups.map(bucket => (
							<Card
								front={<BucketList list={bucket.data} />}
								back={bucket.desc} />
						))}
					</>))}
				</>)
			})}
		</main>
	</>)
}

export default Main;