import { IBucketGroup, Category } from 'interfaces/bucket';
import { BUCKET_ITEM_STATUS } from 'interfaces/common';

export const mockdata: IBucketGroup = {
	group_id: 'asd',
	parent_id: null,
	data: [
		{
			title: '기념품은 감귤 초콜렛',
			id: '1',
			group_id: 'asd',
			parent_id: null,
			desc: '해발 1,000 m 이상인 땅 밟기',
			date: '2005.01',
			status: BUCKET_ITEM_STATUS.ACHIVED
		},
		{
			title: '실은 등산 싫어함',
			id: '2',
			group_id: 'asd',
			parent_id: null,
			desc: '해발 5,000 m 이상인 땅 밟기',
			date: null,
			status: BUCKET_ITEM_STATUS.NOT_ACHIVED
		},
		{
			title: '있긴 한 건가?',
			id: '3',
			group_id: 'asd',
			parent_id: null,
			desc: '해발 10,000 m 이상인 땅 밟기',
			date: null,
			status: BUCKET_ITEM_STATUS.FAIL
		},
		{
			title: '대기권 돌파',
			id: '4',
			group_id: 'asd',
			parent_id: null,
			desc: '우주 여행',
			date: null,
			status: BUCKET_ITEM_STATUS.NOT_ACHIVED
		}
	],
	desc: `
      <h4>기념품은 감귤 초콜렛</h4>
      <p>
        일단 1,947 m 높이의 한라산 백록담 찍음.
      </p>
      <h4>있긴 한 건가?</h4>
      <p>
        없었다... 에베레스트 높이가 해발 8848 m.
      </p>
	`
};

export const mockdata2: IBucketGroup = {
	group_id: 'asd',
	parent_id: null,
	data: [
		{
			title: '전국 등산',
			id: '1',
			group_id: 'asd',
			parent_id: null,
			desc: '해발 1,000 m 이상인 땅 밟기',
			date: '2005.01',
			status: BUCKET_ITEM_STATUS.ACHIVED,
			group_list: [
				{
					title: '실은 등산 싫어함',
					id: '2',
					group_id: 'asd',
					parent_id: '1',
					desc: null,
					date: null,
					status: BUCKET_ITEM_STATUS.NOT_ACHIVED
				},
				{
					title: '있긴 한 건가?',
					id: '3',
					group_id: 'asd',
					parent_id: '1',
					desc: null,
					date: null,
					status: BUCKET_ITEM_STATUS.FAIL
				},
				{
					title: '대기권 돌파',
					id: '4',
					group_id: 'asd',
					parent_id: '1',
					desc: null,
					date: null,
					status: BUCKET_ITEM_STATUS.NOT_ACHIVED
				},
				{
					title: '실은 등산 싫어함',
					id: '2',
					group_id: 'asd',
					parent_id: '1',
					desc: null,
					date: null,
					status: BUCKET_ITEM_STATUS.NOT_ACHIVED
				},
				{
					title: '있긴 한 건가?',
					id: '3',
					group_id: 'asd',
					parent_id: '1',
					desc: null,
					date: null,
					status: BUCKET_ITEM_STATUS.FAIL
				},
				{
					title: '대기권 돌파',
					id: '4',
					group_id: 'asd',
					parent_id: '1',
					desc: null,
					date: null,
					status: BUCKET_ITEM_STATUS.NOT_ACHIVED
				}
			]
		}
	],
	desc: `
      <h4>기념품은 감귤 초콜렛</h4>
      <p>
        일단 1,947 m 높이의 한라산 백록담 찍음.
      </p>
      <h4>있긴 한 건가?</h4>
      <p>
        없었다... 에베레스트 높이가 해발 8848 m.
      </p>
	`
};

interface IBucketList {
	category: Category[];
}

export const mockDataMain: IBucketList = {
	category: [
		{
			title: '휴식',
			id: '휴식',
			sub_category: [
				{
					title: '기타',
					id: '기타',
					icon: 'touch_app',
					groups: [ mockdata ]
				},
				{
					title: '음식',
					id: '음식',
					icon: 'restaurant',
					groups: [ mockdata2 ]
				}
			]
		},
		{
			title: '취미',
			id: '취미',
			sub_category: [
				{
					title: '제작',
					id: '제작',
					icon: 'build',
					groups: [
						{
							parent_id: 'asd',
							group_id: 'ddd',
							data: [
								{
									title: '제 1번 계획',
									id: '12',
									group_id: 'ddd',
									parent_id: null,
									desc: '암호 만들기',
									date: '2020.01',
									status: BUCKET_ITEM_STATUS.ACHIVED
								}
							],
							desc: 'asd'
						}
					]
				}
				// {
				// 	title: '음식',
				// 	id: '음식',
				// 	icon: 'restaurant',
				// 	groups: [ mockdata4 ]
				// }
			]
		}
	]
};
