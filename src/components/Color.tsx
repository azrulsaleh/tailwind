interface ColorProps {
	isOpen: boolean;
	toggleOpen: () => void;
}

export const Color = ({ isOpen, toggleOpen }: ColorProps) => {
	return (
		<section>
			<input
				type="checkbox" id="colorId"
				checked={isOpen}
				onChange={toggleOpen}
			/>
			<label htmlFor="colorId">color</label>
			<div className={`toggleList ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
				<div className={`${isOpen ? "overflow-visible" : "overflow-hidden"}`}>
					<ul className={`${isOpen ? "scale-none" : "scale-0"}`}>
						<li className="text-inherit" data-tip="color: inherit;">text-inherit</li>
						<li className="text-transparent"
							data-tip="'text-transparent'
							color: transparent;"
						>text-transparent</li>
						<li className="text-current" data-tip="color: currentcolor;">text-current</li>
					</ul>
				</div>
			</div>
		</section>
	)
}