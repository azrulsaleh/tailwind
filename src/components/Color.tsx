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
			<div className={`toggleList
				${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
			`}>
				<div className="overflow-hidden">
					<ul className={`${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
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