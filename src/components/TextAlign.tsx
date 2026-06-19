interface TextAlignProps {
	isOpen: boolean;
	toggleOpen: () => void;
}

export const TextAlign = ({ isOpen, toggleOpen }: TextAlignProps) => {
	return (
		<section>
			<input
				type="checkbox" id="textAlignId"
				checked={isOpen}
				onChange={toggleOpen}
			/>
			<label htmlFor="textAlignId">text-align</label>
			<div className={`toggleList ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
				<div className={`${isOpen ? "overflow-visible" : "overflow-hidden"}`}>
					<ul className={`${isOpen ? "scale-none" : "scale-0"}`}>
						<li className="text-left" data-tip="text-align: left;">text-left</li>
						<li	className="text-center" data-tip="text-align: center;">text-center</li>
						<li	className="text-right" data-tip="text-align: right;">text-right</li>
						<li	className="text-end" data-tip="text-align: end;">text-end</li>
						<li	className="text-justify" data-tip="text-align: justify;">text-justify</li>
						<li	className="text-start" data-tip="text-align: start;">text-start</li>
					</ul>
				</div>
			</div>
		</section>
	)
}