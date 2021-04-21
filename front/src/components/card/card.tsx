interface Props {
	front: React.ReactNode,
	back: React.ReactNode,
}

const Card: React.FC<Props> = (props) => {
	return (
		<div className="card_wrap">
			{props.children}
			<div className="card">
				<div className="front">
					{props.front}
				</div>
				<div className="back">
					<p dangerouslySetInnerHTML={{
						__html: props.back as string
					}}>
					</p>
				</div>
			</div>
		</div>
	)
};

export default Card;