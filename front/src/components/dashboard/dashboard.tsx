import { ThemeContext } from 'components/layout/ThemeColorMake';
import React from 'react';
import { useState } from 'react';

const StaticsItem: React.FC<{
	title: string,
	value: number,
	compareValue?: number
	compareWith?: { title: string, value: number }
}> = (props) => {
	const diff = props.compareWith ? props.value - props.compareWith.value : 0;
	return (
		<div className="item">
			<span className="title">
				{props.title}
			</span>
			<div className="value" id="acheieved_in_this_year">
				{props.value}
			</div>
			<div className="subtitle" id="acheieved_in_this_year_subtitle">
				{
					props.compareWith
						? `${props.compareWith.title}에 비해`
						: null
				}
				<br />
				{
					props.compareWith
						? diff === 0 ? '-'
							: diff > 0
								? `${diff}개 더 달성!`
								: `${diff}개 덜 달성..`
						: null
				}
				{/* (-29%) */}
				{
					props.compareValue
						? `${Math.floor(props.value / props.compareValue) * 100}%`
						: null
				}
			</div>
		</div>
	)
}

/** */
interface Props {

}

const DashBoard: React.FC<Props> = () => {
	const [fixed, setfixed] = useState(false);

	return (
		<ThemeContext.Consumer>
			{(themeColor) => (
				<div className={`card_wrap size_fixed wrap_dashboard ${fixed ? " floating" : ""}`}>
					<dl className="dashboard" style={{background: themeColor}} >
						<div id="실적">실적</div>
						<div className="item_wrap">
							<StaticsItem
								title="올해 현재까지"
								value={5}
								compareWith={{ title: "지난해", value: 7 }} />
							<StaticsItem
								title="지난 해"
								value={7}
								compareWith={{ title: "지지난해", value: 19 }} />
							<StaticsItem
								title="최근 3년간"
								value={36}
								compareWith={{ title: "그 이전 3년간", value: 40 }} />
							<StaticsItem
								title="지금까지 달성된 항목의 수"
								value={251}
								compareValue={502} />
						</div>
						<div onClick={() => setfixed(!fixed)}  className="pin">
							<i className="material-icons text-shadow"
								style={{
									color: themeColor,
									fill: themeColor
								}}>
								{fixed ? 'turned_in' : 'turned_in_not'}
							</i>
						</div>
					</dl>
				</div>

			)}
		</ThemeContext.Consumer>
	);
};

export default DashBoard;