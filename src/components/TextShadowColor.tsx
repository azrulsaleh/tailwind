interface TextShadowColorProps {
	isOpen: boolean;
	toggleOpen: () => void;
}

export const TextShadowColor = ({ isOpen, toggleOpen }: TextShadowColorProps) => {
	return (
		<section>
			<input
				type="checkbox" id="textShadowColorId"
				checked={isOpen}
				onChange={toggleOpen}
			/>
			<label htmlFor="textShadowColorId">text-shadow-color</label>
			<div className={`toggleList ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
				<div className={`${isOpen ? "overflow-visible" : "overflow-hidden"}`}>
					<ul className={`${isOpen ? "scale-none" : "scale-0"}`}>
						<li className="text-shadow-2xs"
							data-tip="text-shadow: 0px 1px 0px var(--tw-text-shadow-color, rgb(0, 0, 0 / 0.15));"
						>text-shadow-2xs</li>
						<li className="text-shadow-current"
							data-tip="--tw-text-shadow-color: color-mix(in oklab, currentcolor var(--tw-text-shadow-alpha), transparent);"
						>text-shadow-current</li>
						<li className="text-shadow-inherit"
							data-tip="--tw-text-shadow-color: inherit;"
						>text-shadow-inherit</li>
						<li className="text-shadow-initial"
							data-tip="--tw-text-shadow-color: initial;"
						>text-shadow-initial</li>
					</ul>
				</div>
			</div>
		</section>
	)
}