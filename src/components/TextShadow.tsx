interface TextShadowProps {
	isOpen: boolean;
	toggleOpen: () => void;
}

export const TextShadow = ({ isOpen, toggleOpen }: TextShadowProps) => {
	return (
		<section>
			<input
				type="checkbox" id="textShadowId"
				checked={isOpen}
				onChange={toggleOpen}
			/>
			<label htmlFor="textShadowId">text-shadow</label>
			<div className={`toggleList ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
				<div className={`${isOpen ? "overflow-visible" : "overflow-hidden"}`}>
					<ul className={`${isOpen ? "scale-none" : "scale-0"}`}>
						<li className="text-shadow-none"
							data-tip="text-shadow: none;"
						>text-shadow-none</li>
						<li className="text-shadow-xs"
							data-tip="text-shadow: 0px 1px 1px var(--tw-text-shadow-color, rgb(0 0 0 / 0.2));"
						>text-shadow-xs</li>
						<li className="text-shadow-sm"
							data-tip="text-shadow: 0px 1px 0px var(--tw-text-shadow-color, rgb(0 0 0 / 0.075)), 0px 1px 1px var(--tw-text-shadow-color, rgb(0 0 0 / 0.075)), 0px 2px 2px var(--tw-text-shadow-color, rgb(0 0 0 / 0.075));"
						>text-shadow-sm</li>
						<li className="text-shadow-md"
							data-tip="text-shadow: 0px 1px 1px var(--tw-text-shadow-color, rgb(0 0 0 / 0.1)), 0px 1px 2px var(--tw-text-shadow-color, rgb(0 0 0 / 0.1)), 0px 2px 4px var(--tw-text-shadow-color, rgb(0 0 0 / 0.1));"
						>text-shadow-md</li>
						<li className="text-shadow-lg"
							data-tip="text-shadow: 0px 1px 2px var(--tw-text-shadow-color, rgb(0 0 0 / 0.1)), 0px 3px 2px var(--tw-text-shadow-color, rgb(0 0 0 / 0.1)), 0px 4px 8px var(--tw-text-shadow-color, rgb(0 0 0 / 0.1));"
						>text-shadow-lg</li>
					</ul>
				</div>
			</div>
		</section>
	)
}