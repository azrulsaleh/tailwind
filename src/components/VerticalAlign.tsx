interface VerticalAlignProps {
	isOpen: boolean;
	toggleOpen: () => void;
}

export const VerticalAlign = ({ isOpen, toggleOpen }: VerticalAlignProps) => {
	return (
		<section>
			<input
				type="checkbox" id="verticalAlignId"
				checked={isOpen}
				onChange={toggleOpen}
			/>
			<label htmlFor="verticalAlignId">vertical-align</label>
			<div className={`toggleList
				${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
			`}>
				<div className="overflow-hidden">
					<ul className={`${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
						<li className="align-text-bottom" data-tip="vertical-align: text-bottom;">align-text-bottom</li>
						<li className="align-text-top" data-tip="vertical-align: text-top;">align-text-top</li>
					</ul>
				</div>
			</div>
		</section>
	)
}