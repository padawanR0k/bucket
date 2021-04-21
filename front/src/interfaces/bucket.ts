import { BUCKET_ITEM_STATUS } from "./common";

interface IBucketListItem {
	title: string;
	desc: string | null;
	status: BUCKET_ITEM_STATUS;
	date: string | null;
	parent_id: string | null;
	group_id: string | null;
	group_list?: IBucketListItem[];
	id: string | null;
}

interface IBucketGroup {
	data: IBucketListItem[];
	desc: string;
	parent_id: string | null;
	group_id: string | null;
}

interface SubCategory {
	id: string;
	title: string;
	icon: string;
	groups: IBucketGroup[];
}

interface Category {
	id: string;
	title: string;
	sub_category: SubCategory[];
}

export type {
	SubCategory,
	Category,
	IBucketListItem,
	IBucketGroup
}