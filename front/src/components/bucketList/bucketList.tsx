import { StatelessListItem } from "components/listItem/listitem";
import { IBucketListItem } from "interfaces/bucket";

interface Props {
	list: IBucketListItem[];
}

const BucketList: React.FC<Props> = ({ list }) => {
	return (
		<dl>
			{list.map(item => <StatelessListItem {...item} />)}
		</dl>
	);
}

export default BucketList;