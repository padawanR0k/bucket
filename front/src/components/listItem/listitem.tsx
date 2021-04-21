import { IBucketListItem } from "interfaces/bucket";
import { BUCKET_ITEM_STATUS } from "interfaces/common";
import './listitem.scss';


interface Props extends IBucketListItem {
}

const icons = {
	[BUCKET_ITEM_STATUS.ACHIVED]: 'check_box',
	[BUCKET_ITEM_STATUS.NOT_ACHIVED]: 'check_box_outline_blank',
	[BUCKET_ITEM_STATUS.FAIL]: 'priority_high',
}

const StatelessListItem: React.FC<Props> = ({
	title,
	desc,
	date,
	status,
	group_list
}) => {
	return (
		<>
			<i
				className="material-icons use_theme">
				{icons[status]}
			</i>
			<input type="checkbox"
				disabled={status === BUCKET_ITEM_STATUS.FAIL}
				checked={status === BUCKET_ITEM_STATUS.ACHIVED} />
			<dt>
				{title}
			</dt>
			<dd>
				{desc}
				<span className="date">
					{date}
				</span>
			{
				group_list ? <SubListItemList list={group_list}/> : null
			}
			</dd>
		</>
	);
}

export {
	StatelessListItem
};

const SubListItemList: React.FC<{list: IBucketListItem[]}> = ({list}) => {
	return (
		<ul className="SubListItemList">
			{list.map(item => (
				<li>
					<StatelessListItem {...item} />
				</li>
			))}
		</ul>
	);
}