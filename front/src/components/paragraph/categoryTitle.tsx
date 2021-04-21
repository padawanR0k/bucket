const CategoryTitle: React.FC<{
	title: string,
	id: string,
	cnt_all: number,
	cnt_done: number,
}> = ({ title, cnt_all, cnt_done, id}) => {
	const percentage = Math.floor(cnt_done / cnt_all * 100);

	return (
		<h2 id={id}>
			{title}
			<span className="percentage">
				{percentage}%
			</span>
		</h2>
	)
}

const CategorySubTitle: React.FC<{
	icon: string,
	title: string,
	id: string,
	cnt_all: number,
	cnt_done: number,
}> = ({ icon, title, id, cnt_all, cnt_done }) => {
	const percentage = Math.floor(cnt_done / cnt_all * 100);

	return (
		<h3 id={id}>
			<i className="material-icons">
				{icon}
			</i>
			<span>
				{title}
			</span>
			<span className="percentage">
				{percentage}%
			</span>
		</h3>
	)
}

export {
	CategoryTitle,
	CategorySubTitle
}